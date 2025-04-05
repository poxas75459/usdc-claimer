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
    "JyogVCP58rZJkrtzZaa7hcDcE3a1hUJYJKoLQVuYQzvwYd2ivbC2MioSQBpVXo3q2gdJUUGeAFJnUMq9J5636Hs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AwBFcoWvY53Mk23mW1pvmELwSWXaQHg1gYigsFsknRAKYA57rtsZoovWGoxuHjdV7bkkmgzvmwAE2vFYvJtTKuM",
  "key1": "2udVhgkVMStWCh4DqWoAf9B2z7JCj4pvjDh9ta2Anb4WZetzsfs2YGRoReeUCua4JfHdRVtjdN8jwvem8mMafd5w",
  "key2": "4Y4dJRXRXWfc5bM4n1NGbg4u8EGUaB78cSGjZzUzr41xGN8vxJkr3SjYdLw8TtSUAZ9rYhqdqNXpCm85PuFvabuC",
  "key3": "629s6jB76EPQeUAaEKN7YSwA4dUVYPQ4C8kNujguHF1E8Tk5ftte8jLwGrdEMiTdLGZdfxHhzFoFXvaqgWYxxDjJ",
  "key4": "8SWWi2L1AHU7vMoHUnhrgC2yd8ffvpKGgUoRFUdmHAX6w7rszSukpcLDLBZnco7mRTLCjqhF7ZL93drtzaLLjXo",
  "key5": "D5bCF58aXruhGM68aXYFUQjzK1wUwMDVfYZfxaxJAStLFaYe9QRnb6iy7TRDFJhJjs6xKkk9rhgXUbzCr28ofvA",
  "key6": "2C9ZbRDZLenCqqsvP1S8ZQu22VyCn9Zw6epAQfSksqP7w1J8KoQGerQ5zkWmoApCSmSizWm721YMzE6BMHp6aTP3",
  "key7": "3Q7RK754RQSvVGSy9H4KhudaHs9gcxDpByJf4y16msxRqqjy9N76SgCMvUBx4fAk5cNcmNHn28qmnaW3xjF4BsbA",
  "key8": "4AoMpkN7uwtc5kxuXP1eVjEZZvfHi56NpuVCjT2GQaMRHYD7NPQ9nB8Hrtexz713RDtdMNfx7RVDpu98up9PMgWR",
  "key9": "3Urscr11iwHywb2Ew4DAhsVUuBxqvjWTmgUt9fQq6YBHAztcwJGtZvQBriUqzUr1R9ucnxHtbAZZDTb8Qb1sXTon",
  "key10": "oRuHX9rUqGA3aYVmZyq3e2EoUjjYSKSRY9gKEphG8YsyRVnbaK7At4v7Zdq15a2UcDiP4Xfo6LV6KbQZHkPE7Z9",
  "key11": "5wBHAK3PVmUAFe5JoCxhc9h5NwregSmcv7MoeBj5VY467tys9CYqjLMcD4DGT65zTZQ2NCVJssV1JfZNoB1TYJE1",
  "key12": "2KNg9kPGUAJsQsZQe9Xj3zTbN1U4VJjACxRrdZVKtdpBypnNQm2bPE3BgNFv4UTJeyW4yRnNz1aN48XG5tBfyLyR",
  "key13": "ahpn2LzpwcEvk5xpcj6ujVEnx8azJxymsGMV6xBYCzxLTRBqbYCvakn6T6nbMnxtuzeCyy6Cp6DvHnBbkSrQ4bi",
  "key14": "4RjktAKw5SZ2RiPo5K8QFCLzEtnC2pDfxKDgMj9bbW7X8Phf4cHq3ZiEX7XMGvhGN2mdQFPg28JwWRqyBiNozsTM",
  "key15": "gp3WAm6yFRSzmm9P97sGiyC8pwVBL9qkWLaMNA5ZdMizvLv9JSQwVfXoduvn9ULPLNY6ehJjCXA9URecJdr1h5s",
  "key16": "3v8MEy15YG16gunCCRSVJVcfUes6cxcR3MB3Nwg2nSaQjZDsWAJxp2h3bcLLgVyuthTem3ZajQ9mhEm1zZj9Zs5t",
  "key17": "5WCC3Yk5weVcmGGyiugWGdPGRPyU2Tb9BhMRZeqj5Na19RnMbtYHMwJ3bWtcxJUZhtnRkDMuNQhDik1dG693oTUx",
  "key18": "4Ytqpjt7uP3HFZNEsVtz2XTubFRQQifgQFD2nJZjijeyzSiVUh144E9YiQLUUxC3oXxKabzeiwnfbkSPVRqYQnpS",
  "key19": "34zeyt9HfHhRu38ogMz34QD1xQJtG68oiGuYgid4dn7JtMid272H8cegTFwveK5CYP3Fo6CbHdMg6WriXoRmwUDn",
  "key20": "3ZuRCkwWu9i4qu7kXARRS3hptEBZLyAq6Cw68oUENuBVvDJjggNfUyS1FBVbd6YMpv2BmTufFrdBEpp8LNVuAqx2",
  "key21": "3sZkas4mdJh4tbCU3o3oWjTSuUwU1axLuFPZSAqhXM4JbMAxuK3kpz5Af5AJa9QKLabXzgKg316Jr5RGrnYXayNv",
  "key22": "5Xb8d7Rb67XwAgZJ1FMzvESaB7zW5qBrcjkEAd1feT1v8qV3QPxg5HuaWhDMBckN68jYvAkQXHVoHFUf9Lv4SULR",
  "key23": "4ypxzkbhGEWnQYLBoKT8nei8E3XxVmtX1uofX9ykpo6apb6kT177yVNy65TajbJTfjruKebvcrCFNdYMTm5LknfH",
  "key24": "vzUk8wXhdFfZrujQgr4krq8cr35u8uo4YHuR3Uet2dkizfgQDyYdEzMPcqoy8E6hfPnyjBjr8XqixsaDkk2HXuw",
  "key25": "duQ89Gy5Fc6xwmuzZSDLpXyZ6i53GijgHdBETXUeGRWisknPgUXxZk9MqkQcGLu7os8FTnkG2p8T2txd1fY9ubr",
  "key26": "2mA6ZwuVVzUyzSHzA3TuUQjKDnbd2z6GexdXSjres3c3S2FEggGMBpAoHtr8y5a7unnuwZL5Z4kSLxv9MRtjm5SE",
  "key27": "5LXaC4iPxht4sBVrzudGsY2AyzX3sRgsspcNczLopoHMuHDjsRVySR8GYYRd56hqfJDj94eA7eg7HTUMkg1sdRS6"
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
