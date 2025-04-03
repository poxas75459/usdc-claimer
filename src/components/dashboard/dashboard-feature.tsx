/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2afPro47Q82k4Q3DN38VhqqbZDfd93FsHGti2b9Pqs2jR3Xy5mo9WxtSqHjFMGCVncYQMdaW3DWFYnbgqzcuQqmK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33WwgrgQpSG3fhxAH3xaSTzACciUu26fQ4Hp3hCQFAeJydgKQry8UghpDQqK9j5tK2Fcyktvq34UgorRteaBBrJe",
  "key1": "2gnW9Kc9LC95G9FvHdZXu36vCdrRBBNS6CrWuFD6RKAkJva9FQjxdKFEGwCQKSfcnMria1sKnFnjk3jvFpWAAs5o",
  "key2": "45orwEx87Gp2gs52WWAUfZoZkCJc8C9rTDnQvVpHB5beJH73xekrhnv31hLezBDiwPLEXwq5ZExAHEk7dM4rakg2",
  "key3": "2ZyeL58UgwRGEaF5zLyNdnAmZnGbX9Gop1SLmacFuckfKH2rDU1d194TbBM8w8LzXzLP88eU4rYBCd4FpEiamhdh",
  "key4": "5ohpzePmCUT84YyNNFftH8FnC5a2FE9aqtMiPfudVd1FYKvUFwwpyYvUx6qoVTGfQqYmooZd23iYbsusQckhwXsP",
  "key5": "5HcvEhsSZn5pUQcgKVYrm3CfpbmXQHEiuyyrg3ruoRd8sEcQiAcLGAdruM9htf2hW6K8671D14nFdbspzNkCchR6",
  "key6": "2BNCsVdWDG4hvLXFY74Cs8tUSp2ZBm8PKCajAdX34RmLj2N9tjhDReBMwyKyEjuizgBa3snWpYuzKpmZD9bZ7Jdp",
  "key7": "5nW9Y5aR7sUk5uvXshhYBnpPkLVgbf1185fT97JnPkHgXUPCMGNB4GKC9dkhYS6TYXSZzKPHNHZJ11Jrn3patTc1",
  "key8": "5o128Q4f1qkF1TgsHtMP4VDZxodycNkt5vxhKZwcuSdZRGpu7qcJ9DUtHb5bjm7Qdo646eJQayfTRJPyWD1wGzYR",
  "key9": "VVuFfxdxkZ63tjtaCMyUmky8x3SmHNqewdkgwRaoSzevMQNyVYGrftajB8FAMWYpq7X8QuZoTRuy9fAK39somZQ",
  "key10": "Dz1ygdNH8JNHBrCeVQJJBiNmAn9QHP2LHKW6EAyNofSoyes5XJFpL61KWWizPJWjFfqdEZgSoK6oUAEGwKZCxTz",
  "key11": "4tbJ3oKg9DovhzK9nxQtU8gUFocAbApnPAuyuAfSRpAsi1j7vhEABCrZLR9aYeavY6BKQrtowBnwHxMhzpeas5Xe",
  "key12": "38bRHZuhN5WT6kyFJqk3TeYyrbsHxtxJsvaXRuYUD47ak5Dg9eaHH5mdAZywQChyojzVZ4wgMDKUoYsy9yxM3Rwi",
  "key13": "4SNyA93ftRU7PKhGwAtH6h2Xqv5QQto3NajDuXLSanbKrp3cZzvLu53Dfr3E6quLPR7SWUavmBi2M6n8pYo4ALpK",
  "key14": "2Y8Uigu7EA1TBC7ZyExPSdkqHEcsLujV9e8Z5ZbJdUajuL6qg7d4Yhm18pG1bM3VigUc6NyNtyKpTPRZHbS6Thh5",
  "key15": "3j4ehcqjzSdksy3xjgVvXm8MAvidKXf3iHK5BXw8xJmb8FpMixNnDAW8BytF5GBPViGm6KGQYRC3hoRErZiUfUqH",
  "key16": "4NFJwj3awxmb7qNRpCLZfUU7wKiC8NqD4Nk2URrVD79sARTTtrvbNaVobzGoJyJwGu3Fv9RMRFun5RdYboArigRW",
  "key17": "67mAun7sMCNiX7rXVPQ5AbcDKDWf4NGPMkvVA6esNU3oxKuJXYsnqDH58cjj39tYT3En1hZTHLjQjdrHejzvA8bd",
  "key18": "5ocdkDtNiL3bQQsUxYAnXG5K4gc3njGX3Qh8MJgyrtvSTzMTPnedMTX9uHvmcLf8uKdkiXaC3YFL26UMmy4qEBgt",
  "key19": "511bpYv5vhQvWsYibGRzUmosabw2wdQAxNdWfTR1CW1eb3DSVcyzaC4s8qzbWpNoE8CmJivvphnXXkURFim4vqhK",
  "key20": "2qiN6qg8MMfubCagydV7YfNbRJ8Db6BeoktMnPzazsJPNiaVjfe49HnpLADnRBjVbvfvzkV64tYkELut6xWsquDz",
  "key21": "3qN48wPYEdypTHQ53ARFveU29ai2AxmXXbQtuG7YtDeHGSqzpX2zDuU5YwhdAJutUJyJhrfCXHNkRCCKnp9U2Xue",
  "key22": "SZdLeCHuf5adJZY3kmin9iwYDFTJLtqjmHBVMdtX5HfAvxbYS8aCTawRhoeqnNPLo56UXBaVpEMaYF2BtZ7Ca6g",
  "key23": "4i9153tW1DUL9S2EdmtNNcRTstHvLHzK62W5wd9tHRhHsHqJr38KXN3VpyKH9baZDS4Ye5WRyiG9FnFsYDq1KQU6",
  "key24": "5zaLbKUtYrDsPPtSbpLnG9PDkbLXbGYofZGkjArD8N5pbXZPhzdyPsaAKHxSxVXhaBQeryBWnXrRj5q3RonVAWup",
  "key25": "3z8YkFAAijV474YCFjz9pHUvxC9gFRgRNbkJU4CuuU1ChsofZkKUCKvgy5NyxZURNvzH4a8iSWFjcsFrFdyWZ6gk",
  "key26": "5r5iUkoMRo23Aug7jsGD77hEgFDYRFwhaZfhmyrP1DN9YZyYKZQDJHe1asoGVhqZVkWfwx4fxQc1iQz6mB2t6KFH",
  "key27": "md5y7fWzJa5ph7A8aDTZFx2Cd9UR2xfwniLP65EGzjdgHPtxrVxrNqSGvDhUmS7wT1RMAntrCwBW5vHrdqc5dt5",
  "key28": "2KoUqE2kyVkFAy6EshJXJU4ZVQrejxqxmbHo6zvSQ2qkcvDMtESzLSYehVPPp6GgAnrxSrstbb5rwg99dc7Aoivm",
  "key29": "23zr93VEnzn2hC1AXHZhLtjBiLEVihuFQdFYP2NPwU44HNFqjieZroy9i4xdjAA1nQo7epapearT1FDyrENoYtBh",
  "key30": "5UJBMBzjS3ytig5mqcJuCfDakTdqhbcQuoFAowEXhbbdQxekP78SptKRUdCiycevUodWg5h7sNzrsNnmTba5cPA4",
  "key31": "57eLJ1soE49aKtmsc2c96wfHEDpM39G1jsdGCsb7xH6NzU2r9kxBLZS5Z9KAGwBUThoTkMtaHkeUeYaAzN3WxX7G",
  "key32": "3fDnab2mNyW9mzyzNb96EUWU3CB5Ed2JxWptMoHDtCXLi3BK8GWuZ6SGM8YRy6i78tQCqAQVQzfN6dT7DzZJn1cB",
  "key33": "2itHGAe8zEDRHujvWDmVT1Qby5qhefpsKRsvNaZsY4G57WHLoaYGhFFBoA9G3Hg43kBzgT5LvjsjbxMLh8aZMaih",
  "key34": "2EV8mXFSKMiJavodk1oxnD45jfD2w3fAyze2cNSQbgippijaQ6vMF6tCNofuoUmT4zLzPhTxTcRh97ymFocS4jfA",
  "key35": "tdti4r291doPj2UcCRC4Tjs1DrRRXKKnWsZNiJ5MQX9vGDzF7GXyeP8NP1Wp52oz1mSgTzqnuE4MvtLGzedsBDh"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
