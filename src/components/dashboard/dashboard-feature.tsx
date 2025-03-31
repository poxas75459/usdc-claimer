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
    "5XpikteiGCY7uTm9NKC71s29rE5mSYnyHAXViRatuhhaXQqxg8hmKuoTZnJnL4VPnRk9mzUmh5aqG2cc9vCqLcTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jAofdj3HmKyH3HsV4tha6fFDystFYCMFwudaw2ypmxssDJmVt8wNwZsRu5eRAx2qyyW29ZK5GxuQt8X4jorqaaM",
  "key1": "3Htd9efFLSYdxNK4cw45AKruwnJ8Cpkyj3y3ibb43ho9FDwFzBg9p76ykvrYzVENkBLkzxv3grN546atEiUTor7H",
  "key2": "5TfvikKz2bjNbzCg7EafX4DpGaY6MrNRttBgXpxwt4CiMY1S3p32CaZc7hgpQKkRxPWfU4NuQLjTvENkPdoLYWwW",
  "key3": "3M3VM2iyEQtVUkSBaXcb3WfLYi9sCBCbyRzNJgWuws2JGYDHXkiC67kYL1TEx9eyiweLS6f3MNB7Qi5ssGyGRQD4",
  "key4": "2icLbLvRE3HW5qXqgZem8L8w94HcUDkysUyubN4YnwkbE1QFMV9du8zi46MwmykD8wrBRB8JGyKBpvhhPC5iW9X3",
  "key5": "2gZXp1Q71Z5q2K58D76iw927tdhgcsLW2Q22VCE3ZcVoMPNS6rZdPcDUzt2UUMVkqEuWdbDy4FBu3moJEd7oW1TL",
  "key6": "4SD3dURviV6iTSn4ULtTnpggt7dzabbyhBLQTpRC8TfvMnd36G3c2axL64X1p7DpSxeaK8vkp6VS55HERJbT12Nx",
  "key7": "4h6feLsCfiwju9hYG82YXsEn7hXshnEBokttD2VJuDc7KDCrNQjoCWRnwhyHLMuyVFmk4t5DrHcEoigyJfgF4QjL",
  "key8": "5cYxpL5uCGQAxPwGGc3fftHEVwTKFD9THQDstN8tWzkXGsweKZwAoBJpRFrRFzivQzhe8S2DsGUhDS4HM6zTUR1C",
  "key9": "2zXn99yTtnLzjeid1R5jfTAYF7qpA37pENpsudHpnQiTrfttsB1h18VKKpKfW9y7mf8shv9LfuERoede3JB5RmML",
  "key10": "5Tqts3JxcBiKFCkJ3jVh6d4Ky23sPgJKpjHkF1u1uGAVLpSj7YE6XQ5Eo4VoBAbogkodmAeDJXkPv4nD8gakrzsJ",
  "key11": "3GqBN9an7dwrw1PS6SaCJcEww3aF2L8YNs3QTF7WgwjUUrKiGMtPKuUa9WcF1prF5EBFAFJM712upa8HrWPyeUB3",
  "key12": "64ubTdeXMPDDjY19W4W1NU1co5gocRupNSjohuWR37tcZMdo7BgZNvKW2acdQcaoM2wbUx3M5HpHtHsVUmE3Lckj",
  "key13": "3DjcTcBPyKgKoBruEPghfUVDX3JLYqtinTkWFxRwWa63g1v4EMkC7TLpQ46UAtt3NeYTRmbaiRDNnVuejArfHEUj",
  "key14": "4bTPg2eae343GJbDzHQaYXCDx3HGiWvyohj67cjhaFnFpeaRG47kkYYQJTkMp47MrfgKvqebGQgMSNLokL5gu3Hk",
  "key15": "4bVv6AtVwdhChoFCDXS3vaZdtmjpaAmPneqoH38gBHGry2QowgXaDzjJ9DjDUCmXVrGvKSZJCdh79gVsJEwCStu3",
  "key16": "4buhy95GGjxdPGpUsdZLLNWPqnC7Zqga3tFLUGs7xaqvXiBW4zTYpvvYDipBKVpSfozYCUHZDvR1xB2Boiox9uru",
  "key17": "224pdGbULQNB2DF3hEqQMG3nmUmfs27Sru57GBWHQqsBhwmKDPmJXko4MeZoSCN6nm3BAcJL2zMfxv1V7EF9Pn3C",
  "key18": "5u9bhHFuy2RVWfp1mTnJi54WBFCSqFJR8G5gfDacb8Esv3LmjRd6t84uoTTbbY4qB8f1XQrqoH7kGRk9pFSsXUTM",
  "key19": "3QmuadsB5Ewd4MvVZwPVYR5wKBZJQvHt9qKmAZ2Xsbk4xXyE5qJs5MkpKNDWz9Fhk393DtLj1xJQghFDUfa3EhJy",
  "key20": "5Ft4vbbeutSPXLrWGAPJeAnD6naWcnyCZikXVXNJNhKfevfZvRw7krMroaD9DHECtsGXNEF4jETpoucT14DSwiVR",
  "key21": "2mjXB5xHeMq774pasZMwysYRH3GQE7avawoPJzgQMkk2MoSoEABGK9dSxyW6dMzpwcAm3wcKy46FVS7j8Q9xYhS7",
  "key22": "5iDzBC7AaaUhV165E2YMwEtDJuoutWKFoxEWhBMN6TEw6f9b3Cgwx2K4wsc53N9KGDc6P6RHL9V9QyFydXY2ePJD",
  "key23": "4nE9jBAhbRmtKGYQ2CG2orkBSXP5x9MGarteT7XMSacBvd7fG9yPwfHjWkkbhkniCFx1Lz2wZ4zh2rNwMjJXASYP",
  "key24": "8cTtWo5bXAqGxbJWmiZ9zZUFFGGoRehXgsDEb8YDV5vKvThj3vJjoC7uQD3CaEQ86TFwzxXYrE3rqA6Fe4LRPQo",
  "key25": "3vBq8eQHY8fYNXd4jNUG7X5qVFVSzzDe7apKQSJosmKen3e9FutzSeMiupqEnsbd41SxG1DQQkex47gkxfnGB4eq",
  "key26": "4b6nS3zs7zkTTSMEm2Cs4DHBghtkWQDbeZFY5KFR2rSe1RfACR5BW8TfqGh67ePjxPAkRQFGQjEh9dvJqghavzBt",
  "key27": "5h3hhKQ2jPVLqKSUGoFyjxkNgQnfPLpSJNfoK7NPAH1VPGuwM5YuEGDa57QJH6YSwzGrxn49zQbMa7mBRgpNBoLW"
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
