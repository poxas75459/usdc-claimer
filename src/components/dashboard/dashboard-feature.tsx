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
    "5bzX3LdyjK9vDBS67DEXcp3ZaGZiz6QxWTCGm9HLr6LSWZw1NMz2b7YxX8dPnwDKPMpXqJrNTeHo338tSdpgCrSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8Qo7wLgDSXJEq4QJSesqQYxHVXneMtz8jd49vtgF3M8gaqD8ErFCyFgFGgKGNqg6MsZKBPoxmycCy9GvUiZJdJ5",
  "key1": "4uVGG7XSmdQKYuB9QFjd8xAnBixjpzRnC92VkwhKQsnfxKW9K3raWeM1nSUhz6Je7Jjqo9WTG2kdPuhVdEsuMGjz",
  "key2": "3mULCmvNaxNz15ZA9mynaaFuFZ6AaRpVqKLmSgh2LQhMh1e6ePRkqaTs4KT1XivhBN5HVFwdRSksMDneLhq4uv99",
  "key3": "2H27xyZn49EqKa38Gu9WyBHng9DyAs9Zq4J4vyDi7xhmSft5hFhJa5aEr4PfnXQBg7s6JGpT88EGtN6X7qqo86ZW",
  "key4": "3oCN4hkBHCRoTzbqxE2QBGEe2QHBogTPvyCSPGRtCwmo9R6tbsev7F3xrkG6UsAp8QgcSSR3zUqBUUHdbLPoGufG",
  "key5": "5igPehPfrNpDH1266uu6i3wc9zKpdP686kZZYP3m7nXDVSxkRyDUx36Vpm3QYaaxcdurGDvcJHpcUTK9gXEFDEZc",
  "key6": "3bAdnWuZHB4rzbDRes3nu5xMGrosJcuEFf26149vTqdwBw3P34boEqN8zY2C1JdwHFwSwaATRCQnAsVuBDMeeVcP",
  "key7": "5dPieUE7D4ykWv2sJaH8fHKw4WveYSmrtVub5aMtgmtSGUdc77TU8PomyLoV1J3cmLWfdCCUhgtndrPbAXGpvYpU",
  "key8": "5SofdwWMSUTiNij98g8KV1HwmvZHss8Lmvs1Vz6C4xmokPgLA3T3Hq9M2keSye5xH3vRJshLDSFpUMRkzXfrDgQz",
  "key9": "4KxM8BycrtrxzQYdsdcV8etrJwqWf1ayTSSrP2CjsmTUki8PkUdDC5yVhKa2YDEge9rBNdzau1mYDfJSXkpS4EG3",
  "key10": "7ezGRDNxAHUCVy4PQ1h2dJ5bB9zuuUJRERCfXz1jcQ2WTU9V27bMaKkpodkJ7g1cSnQSgfEJhMeNzoq8SvMcBr2",
  "key11": "MbnmSegT21fsWDnsmjEFSpm79hYk9zqwT8ca4QmBYJzMwYhLkMi6XLG5UfEx4DHC7MwyNyq7gw8wbaeW4WUoxNt",
  "key12": "2zS9kF2GiBcPmkyjVscg1rdLrtVJxy1GzFaCigUWzhUsZ86vZ6eVgkPAwdojcUq3EgrHA6CgcVef3sCR8SwpS6VC",
  "key13": "2ErXCWG3S2KsmCFxcj5pmAZMiNaDcVATiKwQw2tV2yeUBzTDXaiLdRGmHN4d5kvMEovhjMf3NMuyhQsuNRNsp92G",
  "key14": "igxtLjfrGo13S49oLuLA29MWXa2h2WbnaVq8RVoZYx1P23n3omJvfYXxkgxN4V3FEWYL3uQ1LSoR1YBmm9Fg3MK",
  "key15": "47pa8Q8JjKx87eV6PUc3QsmWjHm2UTiJxscckJBB6UKYRvah6qGyJjnGRpXRGaLXvcnLHv3uCWVS9Lh3oQLX4dcn",
  "key16": "2wsjxGvPsQVdkznkR7V6bvWvQ58XCW8UmA2H4aWcnGeBiwP8n77rC1dXYRRXeWj7CJA9izGh4D6zyoQhnTKgTDU4",
  "key17": "332r2H7btjxRquGAC7nzR6gkoQmAgG799QrjA21LSJtooGA7SPS8Fdg7o6t5GieifvVdcADT757itQRdh4HYiJ4B",
  "key18": "w7BM9HcQPFYs2piWK2vA3P4nHTTyLTHk1CMpvUJ8rZy2GtcApxPc6bgiwXmEE8XLTqk5uPUgxJhaCALmvdTLpFP",
  "key19": "3dinMb6S1C86CFDGoLGehyVgPtfb7uXTfEEa8QvMA4ax5zJA3M3iCySYp9GJuZ77NE1MDBuZ16Gv1NK7nrBUWVJM",
  "key20": "49MxCfm7KqBWD6KmpSbzKR9VYo5JsMjJ9GMKJ5BXG8qq7xNyJ4NrdrzM4deMyREmp79wXsJwz4EKQUF84LFgu7Q7",
  "key21": "467YBb1yCrhbrxEyJaK4ViHkoGWb4Bo6ew2DPmruLK7Fux8gxdjwyz1pe61UCfbaquNC82iJ1YaRYPu9c6eqRmo9",
  "key22": "4gJi7ktAeZHfTCMDskfrT1Xp4vbAWQCk74cMXyAWFmEauHZYHknCMxYpzFzvMaAnoLC33Wc7wjTDaKuHE12jZEgE",
  "key23": "npBNRVn9W6d3M4WuLXMxwJTBzyYjfWh36kRtQB3fg6MFy5aknBWq9HcoSTkLwqjHQPcgZpQM76YUidGsmxHBBpU",
  "key24": "2eMepCmHTvADwmsH13MtpUMML7oTmJcUZfjT2c5ApCFj4shW3NRr4WyUFFaH6zTGvJxM93rCucW4EkSkCqWfUTmd",
  "key25": "2EXE1dbNrHBmmMYzpMFY5EZCWasx6eW4ucNYRgMiAoHsY2WGh1baCKJ1WVcevxmU6p3U4MGE2tcEh3Vki325XihH",
  "key26": "4QSGcYVdVzaP45cAt5GqCShApqAcSsNjt7dgK3PiW9crEvhgMjqWwhfcYwxwZ6A5ej7smr8dpb7MfVUR8V1UuDfM",
  "key27": "rmEctpQBThkrLX9vHUTNQhu6R85Dgg6NpBk3ehoWpm9QVTNrKiQ7Ra24siqnxL7SRTnEUid49pvG7ak6T741Xo1",
  "key28": "49zM4QQfSth8R7byfwD9MdgXG8b4yDVxXhaqVyEYXy9dpsWHGYTwiLQ5Kqr3sAJfdr5igKFjMuRTth5PexzCWix3",
  "key29": "3XKL4bi6hEafN4iUxTyhPGbPfnYQfdtNjDKi8hAUqTw17UnJ22Bowb2PULkd5NZ7hpTkmA6JJgFpF9fGyvFHxTus",
  "key30": "5LzPDV3mxq1gUdT62dNTHA1BGiDnvzFzxgWQX1P9XxVkDAMQvRRjNA9rv3Zg3FfhhJumswEV3gW4fmRr3yLvnCYx",
  "key31": "HAtgHmip76qsuZXLodtHv3TTmjR2m8W8mYNAeHJmepW52DyKFDuPqTr2iUamgtUuxxWcVMLQgoQy79fMty5h9Qm",
  "key32": "5yQGdQyceQkKsJc7mZ5qAFzqJMtW5eS4ayWYg9W3heALfa3VdTxR4s3inmoPMaSSZMW1JrS9f9pDrVbXv3C8Qaj7",
  "key33": "63iAdc9P7Sohqcaa2dpvYDevS6fNEBLgoDwBg77idVkwmwEmNZnoaDUFStqb8p2gWkDuu2wReLmLoyhW2XDqB8AM",
  "key34": "3LEDWHVyJ4zKrp4dtYB3MU7Cdiwox3Dm8W2PpUXgsd5ue7bzVpFvCZRJpx9fwvprXxJNWuwR7PjAL1ZM4WG4UBUk",
  "key35": "DXaJvnejgFvEtF5GRrkyiZRyqoHWQ7fWbd9z4KXwXFyM2jtnf6KCshzMkHvRsxVoEUxWURaCRgWTMg8hcuLLNsw",
  "key36": "3RURLq3RS1ewGnM7WDpTxkJCV1hpkkXRvZevrX9sbL6kPATr9wkuguCqxLh7ayeQ73ZXyCaCEaUFN2sFB83ZfxgF",
  "key37": "3zt7fHmPCLTwmR7hRr1Wj66i4XynvDLCUhMjMGWq2mocUBhUphH6G2HZ3AjtfVnCP9iaSRvczRfbwZuupHihQKNm",
  "key38": "4Vo2hsJTSnF2A4vgbUqzuoSCrCUBCxE49E5AzMEaFrYJmUjaybK8oEi2Xixms9UACEMXP7dY9xHVUdq1vJAcrwHX",
  "key39": "E8rYx749GMkemCfgGK8yp4KkPQVTzWbz4XX5qTrcG1M6ScaPaiHEdJLLJF58LA4RPWbRK21ExQWRMBkZuHLRFxi",
  "key40": "5RMRtHggnzENy1J7NRgQ8nPpJSk5w19U7GV8y3ukP2J9HzoDExZmTg6XZhgjpfHNNpMXeS7gPQHyKrrZ5xiQyBgF",
  "key41": "5PFzZ36CqFGz6BRzTxnDnqtHaJ6CVCXpRE6oE4gC9qfHgCZBQSEXY2ZwscodfjN97RMtUViYRz6tbNrZFgdr5tHA",
  "key42": "3XLe7dgYV4zq1EUpAoQ9KQGhxHBPMjqNn2u4Cb2338CRgb7tVgaZdeJfkbaAVKZpAF3WwLyvHHLfr6WYQ2kL6ooz",
  "key43": "4GfskYrAepsV9LfwTzXUukYY56fJZEtsNb2hweNLg75KPSRy7Gm5255Py69fCPhzLmSGqh8Jf57c23LSkto8sCxB",
  "key44": "3qJkzWfc8v3ZBtgPNH28dC9xeEk4z6zGsvVD3qKf8VSz7EWS4fapb2DGsArizSWQQnvewNT31Y3d8BVEZxoJ3ZQT",
  "key45": "4L7ajXdVMFgKvVx6CrgubrQHPAKSxHBvSGx2TarPftbFXmFTcy9U6DKZH8BxAovLTUDN7mrmLTknYvZEawwMAvsy"
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
