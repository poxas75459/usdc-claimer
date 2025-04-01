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
    "4RY2vrF4yFH42jWN6roJSpqYWPbGTCGwk9EHbmLzDuJXwkAupP2vVUjMmjNTVLarpNXH5YajzjVWuxUq3s1Ns2Aa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cWiMryap2N7HVcoQXE8Z4fdQpvaFxuE9tSiAxXTtHWsX3PKGNe8CDynWBRPAyJX5rMhzFSmh51vQewwpXnrgQa1",
  "key1": "52tZNkLBJwcS32QnQNcKj6WmLhK24rvTzt9nVjS4o2iLyVxXTF269WoDXPQtqpJFdoiKQj9ZV7cufF3TbXEe8YGj",
  "key2": "3MYuehmtkM1BeHSjgk7SaBzx2yoqoggZuVe341Nhce5kETdNCrUJEzsBfuQ5LmC78m6nLktmYqoPCoon4tjYWfg4",
  "key3": "igPJntZXsdgMfksSfD58v7ovE7eZA8fDed2J5GRUYrBJhXoh6Kd6PQesAbru97LPDu1SN6iA9UTjpNHH72K2pHA",
  "key4": "3mqNeoqB56LoXC6RwftdRh7ebFP4Td5Kmt1BzHCKN7WXANHBYhMZ1U9DFcwpzUBDwN2KowKJeYchb34QJ5qYukj6",
  "key5": "2RHNuhhDvSs8BpZDcdgpVo2TxUHfLFyTtD9AkagPc5AFqct6khoKtRvujqjw5wpyB6ZmsViNRPSwHnvBqb7uBRVd",
  "key6": "wq3UTC5gbBTLUtPdh7UzLWnK12P8jfpg95bn3LwXe3n3mrWqHsQ1fAR2yBPcprZVjMGit85p8HWyhShLiK1Joic",
  "key7": "4aXnFqdnuXa2YuY3XKGEY3YVDThQi24KM4JQNL6cZ8dPjnzuuqVXMFSmdrFZMQyvfBWSuYjauk15eVc8mj54PDcE",
  "key8": "2gkJhk7XyxCT6DNC4Hj946TCaatSnkd6pam73GYtVQsHdj9u8QvyNcgWg2TNb3CzwuNnYuyzGBt3hzmD6Z2a31gn",
  "key9": "5sdJMVdcUmSMzWT3RbSEaRVvQF7mTRRuMMQyP6eWAT1Wb1VRBr2sjdH7h5ANmVxtnZt5Znur5P3cSAxWtLuYbcst",
  "key10": "FKPfYeSxNYMAsoyRepbrJeS9j8RsNFPfr8TpDheo74fHmsNWWYCPpQf8qc3FL19QQVYENGztyBLJhFzufUVy11Y",
  "key11": "3W5WADDA87WtbxURPAZcPHVRvRjZeTMjLn5FyBryZtmfwezTqgCv7Chqkh8nK3idPxXzkw1BKvTbaYQZ637kVwt2",
  "key12": "DUQhpqEE6H4fpshTJQWoKyCZAY8aoQJM93DjJ5MCecJF2XZYJrUNQ7EsGWAxg5wiM3bGx9s4GHjz46ZzhH8XvS7",
  "key13": "CMTecJcXHr6PhMqkrqa6ymJ1Khpvc4QNCkJqx4jefnfxwMUb5LPddZmN9fZ1Ni15SvoxcTaYu1pk24gfxDJ5vpb",
  "key14": "4cVvctTTtGS5A9wTttaYtRQ943feajPM6UAwXhpJEUP5eEJAWXYUL2dh6og2fqqJeLbpmLRrvYvR5xqNBqqmgDfY",
  "key15": "5wARkqskRjV8MpyyBmvGPj5oqGN28ddgspiwijUSjpSMGCGPR7vdrXTh9eBrfA4qRcGY8TnyFB72BubpH3oAMi2Q",
  "key16": "4kbNx6C2xihNDiim17cfBdE6xuGX1W3oS8FJWXwBvJLiT2nqPp4QDLT1cwKpty169bqCrz8RaFvCZWPWnaMiuCVg",
  "key17": "66GjBnNb4EF1LotyopBdZipowdfaHVnMsBk8gxBL4fRhL9Go1x18QyEdwiKWuu9yfLwQx2LfcAc8qEZHakQuc4yT",
  "key18": "3CG2C5dLzg3NBJFWbnmBUZVgaP4BCGwa5orTetVpV3kB9iiwLtiMb8s6GEhHQXpjYocEUXRkRH6ryuMcigefewah",
  "key19": "3nfSoZPiPwWKEaweYRurUkG4kdtZbiMTcx5uZC7jr7zyhL4pu3JoNaJi95aqub3JsLTaKJqArxt3xH2JgFbgscyd",
  "key20": "3fyriTxTXEcQ66UJ9fP42gnVVB5tYVAVcgbgTQyR8z4CUV17rSr6JAXRG6WJ4K6fb2T9wQ4D3HA3JWPMndPSEZLk",
  "key21": "4fC8WRB94d3uYEywBKoHkYwRMAED216NbFCiz75qVu1pzRzkdYv933xcTPYYNk7r7WNLuGcCzV34MR6JAJsauQ3P",
  "key22": "5N3n7WDM42jf2SAPm723wJgbKNPo1vKet3jFEHPqSmmU72zZqHcadK2wkYxmRrF7Vh21dbuUXgkSwCKrm5vdu7tR",
  "key23": "4SSHAMAcsqyDWjhw8ugbWjXGoEU3PnakVDMTXJrVzsQdoDqRqtNHXsBC3qYmLq6pcD2ZzEvzAmg1NyVhD12MtsJP",
  "key24": "2pTbXBhKWv7YYxKArfWER898DxYNFGoyhQe2htq2wQEWW3cy4954AM9pveRy6gBowGiKjcG5etCtXWY4bzpAnoUZ",
  "key25": "nQtK3gcYnXRJig7UWHV78uVFREn6PKDY1rmhLP5KpmEvEk9843WwCTys8mqbDodeDJXRcidQLHAqJSwxsx8B8yN",
  "key26": "5WoZu8zhSSUUJ94sHHayES58jkZ5QiGwTYPKxE9AgAeuu1BQs1izru8zjb9ApJSPwAKbUpoParSB68UMiUYSjMzh",
  "key27": "2nicChBHjaqgW77GwVA33W8qpwTAADgV1gNGsBiRyXr2xduCth2N27syWEuhY8r8gq5koxhhpanHBa9dTVL8VRMS"
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
