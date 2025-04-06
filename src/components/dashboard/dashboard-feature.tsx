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
    "vWeac95ippTcAuafuEhkXDfSwfs7UDu34oFLVuNc2nFGuwuPM9Ji6v3YKjSLdP1aCsdDSrxinrvjbmyofhrPztT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LR1q9tfWkmAUsa2c7biLrt659DE36AFyLpoqiJUMEPkT4USunRKC6KPwQxMyPudcSEywbfw1WtFHaqNLLRXDD8r",
  "key1": "joGwF7gAaGmrTkdqEes7JTEhkagrVy58qUya7njs9Z1rHbniuQJ2rUsfMP9oz6R28PK5QxwRmNnfNZWXasBy3va",
  "key2": "TwtAN8yoEESFyzNuq6itJP1duZ388WQpQMc1X8aUjmgbjZRiuXLgvoXqFNGwwvA86PFQGmicU1uwg44g4NRFKcb",
  "key3": "2k12Ckeb1prhrYsfVd8wit4NzbQ1cv4ocJnWA7YgsPVwwJKm78zwV7gfdS9vnUdAvUmfZ8tjgdTPFyBaw59CvABH",
  "key4": "29NNH4T5XPbsRATgasVrHWqpooCTrdxcerEi7aFUhizyGE7mwi2atP2MK6wD3KPFhXkogcofBDfGAbcM4rqv9pKR",
  "key5": "27KV243PJ4Tp7LNjnQMKPVgyKbeYeWwozLVoVDegWxRtFLshK4JomsNVa47vwb2qouqR1WJgamzD9EamwaMbarmx",
  "key6": "51mmwPMdEoviAqtQ2DFUHAFdpvkbbWDToAvdhKNRCTZkgAoGxi8AitkQ6p3joAP7LhCDayR2heEc7BezPfVFZaiK",
  "key7": "edT1rM9GhLyVAvVrrrq31mCd6UviqcLVifipUL47wvdVKMvHPQZryh5CM3rP8CMMSwMkv97mn8DQwNzJ7onsoqq",
  "key8": "4wbUMsVh6ZLjbzaMKGSbNqoqXBdbPoc97YRSXKr6oimPemaQywqZWAvKvAYhLuLYwBweWqBL6qG3tCxw2DzuPfEK",
  "key9": "5HMDxYTvs9cqWtnqVVVbzspzCFB3zemFzjd2yzqkKS8xfwgfztJzszUxigYpijC9xnPrxVz1g8nRNf4x7wJjWJH5",
  "key10": "59bM994A6edWm8WqTRaZueE8aLb3r69jVze8u1wMiCstwHgvouykGRPUMNAyGPhRo9gCazcnKBRtdxADghUPHq2j",
  "key11": "4tuL5di6JQqBhAgTu7e68cqqFKw9Hm5ebyRLCS3uSo6KFwcf1E2eRjPzScJb4SbeeLWckB33kEMKx4LbkJBjysLU",
  "key12": "fLBob63zudbHqs7JJuzkfiuYS5DNbV1v7bQwL8Uo7eGGVvGEYeY4TAb8DAxFV8C7Z2cdMBhhjxcZYBXruxyHBXF",
  "key13": "3yKFqb2eENmJHHc9tiu14efywYrRjdLhkF2qADbDV9j1tbowrFSTBaD1BLnMjdUP6C3qrfKG6q1A8aHtR4N23hWe",
  "key14": "2o9951xZD7BBsWhrBGFGrXtZTtPNFHGJzin889oEpyh6RDotFi1Za69xZwFHouBESpwmDWai6S1FrYFafxGGbC3P",
  "key15": "4EsGvvNbzDEaUTzP1dLta3N62LvtTbM1BoQAKsr1DTZUJ6tPdJPQEwmVWfusf54nay664Y3x7PYBK1Jn8gidzoYj",
  "key16": "5VLHuqhd9fACgZvRbBfDZTzGTzjP481XU9Fa1CG7958xneUczKVvCzSBwLtDg1eChnws6RxcmPp5kCzwdsuJu5dL",
  "key17": "3izMDjfcfz3mb4HzHFE2EzqrwxHYYKviy2W3aapC8ZBcNmhD6AG5p5UnE37GNv5ak2m9r1zeZVML7SpzvK8MxG94",
  "key18": "5Pp43oAe5gsWrfwXEnZQbKzDurHQKzs3cPRD1YDM1RDCb7u1yKuMJypFQxkaC3o8ZKYGPrAv7EhmRurqfbQd9dhZ",
  "key19": "2QS9AA2mnn35pRsZ5HMKicQHHQ7nSjPJmcDSVei3rYZFpQ4eoaLfQxv4CTrxAq8z8w1LGtAgJ4aNd46LYXBvZpRZ",
  "key20": "Jw3KXB4L3jYemXGQ8uJeursjK43NT7Qdc4omMGZ9KULiu4hwxHn6zG6LF1REMN1dKL1YPHmrKLn1tueCYce6o8A",
  "key21": "VFA2m3TKT823c5C8ze2eJQq9ewiN8GxXJLqc3gRVotSz3ehPKKD8e8hMGp82LpCWV5R4juzdRtWA8mTr9SMcS1u",
  "key22": "3ZoaZZ1FphjUsjL2nhFDYKeYUk8htCFHSLfRvy9PpW13AAyT8ZcWEsS53CSGoQ97rB9kt4NB8zEtnM6ZLMDPUWvH",
  "key23": "3kneSupoa4zj5r8CrPzETP1LY3GFfTbLtoX687zEzeNdDF65KFN1qchq6sEc8x8WJMT3uyyU4GfvscKCCscUV1fN",
  "key24": "3jQwyDXNCetV1vudVKE7WCwrEW4JWMTQJTbDgKdK1WDRUZsYTtHQoVFNaw8yrFStMc41rTWYXRQ1ta6MBL9H18Zm",
  "key25": "cNVtFtiQKiaJiiqnRpjvYvmEXua3gjYn3U2Rq9Ur1mpRz8dSXLkFCq3QyA3i9deEJ2UnqFzEze8UPuXJmnGvTyh",
  "key26": "54Cp2iwFA9DmtMcaPxfBg3vLMAvc34EzN8zmg9a7jfAE7DocJejY5f6XCqXitzo3GmaGvQDa2WAg9E265Pk1sW6",
  "key27": "dYTnXNquehf6jr8XGofg5FFCt68oeFfbtwsdR51ACvTrMN4WTFPvJ8psowKZMNKcQc6G5dt7fgHfvvDrD9UzGkn",
  "key28": "RiE31rBpHsHx8TrbBe52wHNRTkCMEQGDQ5id3cYrju6RqRLkV6Fc4yaQofrRmRDNRv3LtXZiDPFECuVp5id9XMN",
  "key29": "5UH5WW8rAhZuw5B5ZBzGhnNUwyPgUDyGPwcQqsAzRNS91Rbo6XQhFcdqW1vrjfrgjHRhZqqqa8UGppZezEwALUtQ",
  "key30": "57N84uYAZ3r8cDRcxqaFmhdHtQEcrZhYmwBj2pbyDiRq88ZGi6RVpPEwcE8qJD327qRDPrGwVre9Rbgev7wthjsF",
  "key31": "28iiV8LUVS3qh1yH8GeFxG9t2okchv63SRVv4LjUqqQgsLxS5wVFdt4eGj8UPT19TYpQp8M4Rwme61oHt3r1M3U2"
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
