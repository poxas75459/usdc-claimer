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
    "2kWBYk16gDMBguSgSQyj8SBM8A8L1gYSoLJryrJs9GJMavq8gKMJ3mXQyDJKyw9kAGKLsDHZo6DhGDxrAB6EkUoV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eSFzGCYDyAmQqWfELrnZR7aBDZV5RLnJeFEiEz9sTpzB7uDwXppahJGf6qQqL4UELzhCXSJbtk5r6QDCUxRk6sP",
  "key1": "tvrHu5KrLwr2GxytjN8pgf8RPGC18UDyYyKbgNGcepDmCMF3KQQ9hYmiwnR9zY1hJR2W5xqTZcDvLPmfQYaNU5c",
  "key2": "4PB1uHu71YwfQYsuZQiJakwrHUFGpfLRTWZ3uAHtMLB39E6ruCW1eEEhkB33b8aP3SWgDdKZ3LEGVW6X8ehkTgHM",
  "key3": "3fU3csmAPnwp7wUDQRXF3VseEn8GNsosJ4cakWh5tyFg6UHB3gyUqbCzMo7PW9RD3LpkWxmjmUjUBQRsejBsG9MF",
  "key4": "4TkFi9odNcjSVQduy6VrrLNWsV911zrkckiAV1bXufn3KHzqyHSMWmBbWfecS5xK2nxbGmmeVd2bDvn7W1GDT1SQ",
  "key5": "2QES5pTobEM95sJXfp9Qg73JA6PkF7TsiQ9eBZY5js9skT9nM3zipXu99aipeANTtcuJnNsfhXGYoB7EP4T7knEh",
  "key6": "3FSXReeD9j9T84Db5pMuokwtwQrpyN14AjtAwmrLJWWj6Wywod4GSrsLuQ2eUDkaXUdJEZG5fsZhfU6jKwL1LPFe",
  "key7": "3yE8mKucm1MibeYQniXFYqdkp4yt68h4fSHCgUsfGJjWcx8JbovQ3E9JSXtTsWfZBHSANzv6NfbE3vxt6SvTYXLc",
  "key8": "63atjNqPWtcD4c2U88pAap8QFWZztVuwc8YAb2xiGJginxAg3NZSRxADyGMmhMib4ADp3V5Fp94HUsaioTD6jaq",
  "key9": "sGwfLFMRMSykfhRmUCDx2J3TyZJedCLY9CQdywBxpc2LAeByUkSH5FEeTR8pBqJUkax4Ebvhu3JKbcx8UaKXRVr",
  "key10": "5auw6K1VYBNNRGagkQnyd7ZKafK6EoRemWwW7jVWqYTUiQMYZMeYHvRaT9MWSxZwSoNXAJQuFC81eEjcKu87isn6",
  "key11": "43nZfUhCwaH8AJ51FxeCwevrWXdeChPTpYDqFa7roHDwcNbKJEagDYJbCQqDuesa9S7LxSR15HUV6JrgzMZjzXX",
  "key12": "419nubiTYrWvq31JHb3n5R5Ggrs99WYoBk7BTn1KNGCak5czpWySAmSsipQHR6RRM5vHx67e5SGo5hoLF92AuAxj",
  "key13": "3v5pgQvbbvYQjB9C2A7i1Nu3vfsP9aaaxWkiHQ3zTUBok1H5RQE5FWP5LEJTLpQTuU92VnyVvNdQoJzig8MMgXjN",
  "key14": "37JFMNMSyyUen6bjATsCESdaS3kudHFvBPDE6Ryw6BD3MGxe2HP3uZdPF19Qp5v4igEifk8agDKgnegcpynFXXp4",
  "key15": "3ZGoLKgVQnCuMFwzR8GZTw2iAKaGoPR5DbTnscB27pjBRpM3H4CFKU1q5zqSSC7REX4v42PtwKdRBGijyiiPDjN3",
  "key16": "2TjRvwNmQ8qiTvJhFP3pQhenATeGK9feaxFgrLMYQAP6fs6M3YLHTqNVMJsdQ1qF95kAaZaMx5jQLjSypPvPFGrk",
  "key17": "5Wkq83KkVU8DGx7RVsmk6wY2biBKuRao1RCz2xgQmgHQGUUc1Z6ps3QsWh4Fjo8R2GHAgpCJyySSrPC88tccGhhR",
  "key18": "4djrUTSwu91hQebbWDiqtpZ4D1BCVQ3BfdDDkf3FSg813aNBQkwrgpPaonb5DcE85oRcV2A5TnW5PSF9W7aDxih9",
  "key19": "keorosTmYsE5eVA7qkTYzMCepJb4ghnwkHjKoty1YjkFy6iB7zFyLgDLFt8GaZowCqbnXhyudCx1ocvZnPmVpBd",
  "key20": "5wvGnpjPpQS9eNAnWrFB2C2BEGzCCMFdeF6iW5p8JSept5D4Jx6u59PxpAdWaitQGdDxLtvCojWs9csC62DPDvjP",
  "key21": "3rUfZpWJ4WegpLv6AtMCRSyYs1axcq85veGfU8rhtA7g6Rr1oKDbKD84F7fM95ztWh3uKaRwvMq7B4H6D9Deojgx",
  "key22": "5KLaBZDv7BC3EH49xdgdMFebfkjjxrAsKrFXHtFK9qHz826QYqqhCNnw6YJKU9WRyzW52mUr8nKh9FZqSqNUqG3o",
  "key23": "3RMafcGwzKnBaWgaPNESxERmQQfrTuyZjccKe1q2b2a53R4PYVbyqdUYir7pYjtas7ByZuZ1qdGgNfSrAet34hvH",
  "key24": "4w6sBbFmryF1hhiULe1AeahZx7DQpzbSQu5SENHVGFkDEQRFgMgj3AgWZWVyYMvNAYXyms6cQ4WHxZNAxEh8xGos"
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
