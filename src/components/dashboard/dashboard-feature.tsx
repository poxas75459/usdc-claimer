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
    "2aUg4j1u7YpbyjcGdAg8RM2c1MjozBd8sAbGxmoDNFsAp2SpPbuoU9sP7ecnkxzn2CnwnwpJPPDtSmxZzVS8zHZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ApknpKDBNYD1YsKJHTBhBbHV6Y8fSf3nV8v2YLdMqoc1LLGFUB1pHY6Z2LWNoy5cj2syDyJpm4scYZhmaxHJtzm",
  "key1": "2mUtH7MAMVEQmdLB4z6LkJHU1KAMesUimZ2LyzPkPUWUTpWpgAoNEZftR7XHp2tYDX3LGNUUE3SmxDDC53uoqDwW",
  "key2": "3nkPtCVU5DqZ9zBqn1MaPftrfp68UFdUD6hrJjeZTfKYGe6irAVZrjuqYCUg51zfdtNsumDCtuTR3NuEpgxUg6z7",
  "key3": "3QDRMhXdUWataaC4Cd46QksRAW9U7L1on8jeW9QPnEni9AEbdWzL3WrbhVEPubF6fAtvvEh5aBqscKRPZQhs9fqc",
  "key4": "255ZVHMjBfKy8ewDdaudvQt8yeSNC6ieepqYPxoxQJWqDkhZM4dXSQESMBJetuiHTtjYFZMFkaALQ7ZvB9KPZSNT",
  "key5": "5G4GY16xP173zmxe1ZyRg36za99WdcE2oQtnHEm7ejbtQc1Conbuoxyr4bYLSc1fU9D4E5W8YnpPGtzUzVDJfMM6",
  "key6": "53vSKJXdgm844LdBBjsjroHkbojMiJS9RdkmXP3bP2ejgMYq95Rfsi4UmPvYbY2i5sSHZMQwmWRCbQQoeKgegRCm",
  "key7": "4ckPcni3DCWchD88mhWC1wanPqkTy32cEMykyQj4PV2ZY4T7qmF89KPWe2NZeM8fGzEJG1SqbGnhTB5ZMpZMuyKo",
  "key8": "4Jif1iSMD8CduR4nQJUiEHn2n3xa1wjE9W66Eh9LdcsQm8xKn5eeoCewvQYpPmFW4MbEw9MNdrMAhKYA3CQpX33p",
  "key9": "5ng33hHNCehFyFGr8xKTfVuV5MzMC5A8XyMnimheijVTvLbDtdQPADt1YMADBbgu25wH1wXMq3PmgEYWkF8nr7hH",
  "key10": "4iMm7n852uLSsAqnzBdAy8BDZvQohWWLJbCXXCqLGufdF1Hs5oEZm5FGAdTcsZTFzKoYbTtHgUYXJhqZbkCEn5mE",
  "key11": "2rKg37jZw2DoZJzm67ctPTrnrvGSo2h1hi7JhoCiHgf6PQuwBR1esRBEDpxNRs8sNLK9gqGFXGjYeLf83Z5VXHzM",
  "key12": "3yQhb9GM8usFveuc6andbAuJMqfnBbJzj9umA2t8RgygXuYFCuPSqYeWtcXn3AoKVRo1EtkDwufiuxbp8bWgwxE2",
  "key13": "5isNgNRjFZbunrr86wBfuTR5PXSxF6C31V73peHuJeTWTHz3EWNs92Eb7jjK5hu1Ebr3KjX7iRDPzfNZqzBfsBcs",
  "key14": "r98bWfUz8KRVvYRAyvHGv4QN7FtAQxx51zX8LLQVRj2LD321LuCFBQjDbyVmQFxPsZi63sR4ZGM9vpGbSgdoTzr",
  "key15": "5WUv15UB2MNnRmiE5q4RztsSm5nBejy5J4ovUVMXjbY1R7Q9QcQRLaFhBdNvUyTa14c2ps2Jhm85JWpMAiUo1tRY",
  "key16": "3oXTy6xbAvAyVMKarUEop3BKT5dpeB3cW29wnPDQ79w92rSYhnkkUfvPcu5hQhS2mMPyVwNEpmmxiFJWxpKWAfeh",
  "key17": "shYozcv2f4JW3KQCAqhDbM6qwzJaxrK5bajzzeVah1rN8SYsdY9K1P4mhwgjno4uPAwXLSqRjhrdMRQYrVvhEhp",
  "key18": "2Lwya5AMjMtxbWeEsnVu6LT1yvjqYfxppXG8bCWgMbdTRoBmNtkdK3ZgK7AxfQqVti8q1rh4KSuQbKSQTfAPTXQN",
  "key19": "7qfmu7HP81DwPyivB5kJ65Lo7eDZRpgJRDb4hkb2eM5CJAzHwEsY9Lf1AXNe9zhVSCxj61u7ZPgFV3PdcgXBF3p",
  "key20": "5oyfFRvziCBztYKnkXSaMhTWKAteSiwBXvALC8T27BmXE8sDjJVBQFSMmq6LCFKiB47xiPVdVSK1LVj8X2tC5uuu",
  "key21": "2h2ruWZfUJgyDgktpfcXtePAQ5ACyc6iidawBeMQTASNSKuE67jeqHkEZ4NUmHWs5Fh6STcSrNLsTYXveFV5uusg",
  "key22": "4LsKT6tdgsGqDwGGDMtwt5BXnXXUYrNrcXHUwvKSFa5Zmp16JaF5B3njxsEzeX6p51G2N2EjwGXoW36oWhrRYnHL",
  "key23": "4p5YoR4JADGY71kMCuM4VZhizz3fvWMwaossRvgtuqRnuqcsjBzdxidL2bFpisZJbGgkUtsLykUrYMUoWawaAA65",
  "key24": "28PHDjxpXsWrLYxc2bn5yc9twbhY4akornfJNwhjjJe81fVJnsrwMcWE65nwg78a48KiTynC1mAC47r6dJccKiQN",
  "key25": "4iGvcdgAYZSCafWZsZ1nL8AfbRygz5fTJ4dbLZu28geXdB8mJcovLLm1ZiVVwWPznYrxZ6Y1Y5Yf5SJXphTR8LuT",
  "key26": "AwyzArCw7e6pjZNqVjKvuapwHZWkanZRRWmJTMKQTgfbSvavhGA2G1HdAbMx9qcRC3Ao7m3gFT2WLPEDN9HLVYv",
  "key27": "3av9UkU3hURnCfNhJ3V2ATALGiwpi1TNZGXj8EgyQ8eW5j8RWjdKnkvmvroZr7zG5QS27zTnNuJYpJEL7ZH4oAK"
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
