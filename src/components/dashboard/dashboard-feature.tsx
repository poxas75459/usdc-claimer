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
    "nhSTTG99nbrKiSeaDuMawx8xZvmWHwCdL1yAY3oh82eUmrtxQ5ZymuLHceoDuUjzyC9KLXNuHmqJ5qJrXQVHNU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VHffq2aqnj3niqzg9C6EnhotHqWLq7XaE7WmULo2Z2KyJuawoqamt1x8eA5gykraeW8ijfJtN8A9AzsSbm98Qp2",
  "key1": "4wuyAhq3s6aQJSVd3P3Sv52XYkj5TrAEr1C8cDUTZim3FVbeAziHvyU1dx84yozhz7cvKeSsY7M3khA2qAA41JRx",
  "key2": "2MFUC9vjUdW6dG9fhCxYWiL3jZUmVH2vgCHsy34vyMp25QEjgNW24aGVtY1o5SVWMj1TYqYkpy8DXiQ5CrpfSot",
  "key3": "3dpHV4mcQdjax7t26AobWwAMNiHCuCMqNX5qZHHQn54UNVvgWtSnUyXzQH4eD2pJWR9HMgUE4oW9Cxfs7ijyAJuM",
  "key4": "4b6YDq6AJeeuZiNqD6qEMVBgHxxsLiEL5BCfqWHwUCzCraEHd7RPhShUJY5TGmAZxGiMNpHdCCBpDx79jKXHKYn2",
  "key5": "3wdGnKwxeojhCA3RxojTYEpTBMnw6WFd877N45cfhWAWNA5t94GwmCtcWXZfTJ52FGUsdwNKUdWdLUzM6jtq2Sf3",
  "key6": "4W82dy4fFYPm4sWruFPZq6xyydf8t6Lc1e6FabyAY2WEzwyWaAcBuw69S5RjRz8eZQMjdms4oEgsygYi585pyRAu",
  "key7": "ZwyosQ4MTyNdb13GefU9tjdHXgxpFCuSSJtbFQ3CBT8bigb4giEyMuMSDjN3aVJZ5dkRGZRwjQ1kixEtm8pzFv5",
  "key8": "3kpvAFNYWVAoanLDeDuQ5VML3oYUTxbsawHhh8SVmky5UG15Hu3ub5jJzf9BcyzfSU2QDtSqSbcUbLTpssdGcnD8",
  "key9": "2WsdUJUkemxyyXeBQhct5xRwVJJu57T8KiuVTcv1PBkYKzrYZKC34ewHFbxhu1oz1MQ5QquhVNHoYV8ebJxMQaBL",
  "key10": "5hrnQWuenKtMwKEUJb4Ni1RZHXW6UE46PrsSPjir88nRHZ2q9KyCtiPzZhJSFCfkGVPNNGW6jSmotiX166mvJaeo",
  "key11": "33EMsecGLaRPERrRLayFB9DnChwBV3a9N5vPrECbfzihRKneUTaZwqExT6cxpH4UvCCFUYcnFkeFhAHJhWsmhpke",
  "key12": "5eo5NEeKks1R4aXGqdsAoAjPrej8iMMvY38sKfciH5r1EQNXLrd1ZZMYQ86JfMmNT5XdjDrD4mQMrmqMo2mr9nzk",
  "key13": "x6zXDGBi7H2h31L7Q31MzEoouX9kuVNxAFUkMi62CmJxMNjKKJy3QZsdBwwtafxeSyCxWzEGEMgWgqqMmiPHsuF",
  "key14": "YArm73FJV7vbx8N7iFjutr4QTjBHxoFvyCDr8J83aCVeNYPES6QdadPV4QyTNkvB9zoNXxRo8gRDk11nvoC6sFv",
  "key15": "21uQJAC2bbv5qkJ3UUffWsFz5Qtqhkw9cDFLpFSnqGGWQK2UqSya8uyQMr2xdkZPcjF2B2yKxfp4QW6WzKKHhi5a",
  "key16": "5EQPGt7GbbFru3y19Cmwrf57cM1xHaimNZpjZjtu5tso5c2xaCd6ToAXVZuNbK9Af5wAu5szqCjfU8WozcT25MuQ",
  "key17": "2AWdbwBqM91TVmGwjoZyMJkU2a1yRH5tpumeyWmMjJ3RLhtJf1UuGK4L2DxZyGspTpYrYsqujh6UWjLkm5AGw3SY",
  "key18": "3mbzFQFb1NcQAC5cQzKGYeubQSf3UXbJGgwbNLty7mfPa9QWmzsVfbV4rhpxsEtMbACwotHJM1SXX3QWEuKiPagY",
  "key19": "62VUrwxTbBN5H37BWYF8K4zEZsjm5cuyAFJa9gG2YBDScNRBJ3WtLFTJ4ivDMGpDS1ER8wwSinCbQJDma9FtaYSh",
  "key20": "b8Jms7jHN3aVaYAZECWHwx2rhLVvqh3cyqwxEf5cZHPogQnVa1JPrXasrBCPmjrqYJnVfdcYNpjp93cVziuGjFU",
  "key21": "3EhfkiiaVWpES9hZzN92zW7pBG9DqnsKZyz3a2RGsbmg12raCRkKikXgRpSGfLdi6Pw13jqs1t56T9xKd5nhFJY4",
  "key22": "pEhmxaCtR85RdgR6jTU2KYSrtT78fqyjgrS8VJ5UUJR5rmobYzkZjMcqVzM6c57S5QpY4E35huojSsJvySp7b1v",
  "key23": "22gwv4kLRdJKwQ93BTgQcV1RFNATsyW93x2hZrRfBiva8nzFFkYMpE7F2FSaq3BhWp8ZRhYMgUrrULWqk4A5s3Rw",
  "key24": "4w2hyQPurSxu6boXi4tb1qNGvp8nSvvoLsHLLb3eHEgPUmTri7Fbi9JdkqSLsGv4xBxx7WxFUAoiTiP4ciHmC5sk",
  "key25": "2ENsfHWHJUYJuwydAXqDEFkyy2R1XFFoQxuxy21az5btZHMsweRAQoU4G2FzqoTRwDTHQx4LqpdhVBuJfsvJNfTa",
  "key26": "4AekMmJjhPpYQZZYEUExTRn5Kwi87huLRiwYLGSBD6kF8vihNDcBUgVDQw7xgwuiJAnaVb4GUmXHgxePXZV8Zfmy",
  "key27": "64ZCREmYsiZHhe1AUtPRFkytcny8FbLZsUDy5hBSpC3Z5pZiH3ihiLAvmpmqibXg2r1FATyo5wFEnddg5nDq7REG",
  "key28": "51kTQZ1fpxdyHgQAbu6QPTHsQqaYE8MzbLJW8V3ukdTMhdjVAs4kC9jsMPzNwr1imEvnJF8uo6F4kh8jsGMC3tjD",
  "key29": "2JUtCbpGQZHYTcHzE5DFF2Lh4Ur4zrkBUb7MYMcknhYMZYjG8cAmApqFc1Em5MWP5viXNWfoGLiA2EspFMxUSMJL",
  "key30": "3SebxuMzrHmFkAPsztYgYTN2mJMqB7gKh2mbhvZooi4cr5yYgmJPVJE45r8MFukHFnK9DtBHKV6UxyrQ5XAV1UNd",
  "key31": "3h9NJaZF26odjwuj1ALfWS3CidytAqSXmoPKekgYenyZJzvPws4n9hahmM2JJ9seZ6ZQThehWhJacyDLBG1ebX5S",
  "key32": "5pLhLNZW5NM2Np9znzatGkfY6gJRudSScxDmBESvMCLg6xUBfKV7zrVZ3FYqD8WGDnrgLwcAr2RFCRLM1VDDJ7Jv"
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
