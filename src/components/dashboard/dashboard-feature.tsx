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
    "4DFXdBP1dkDDRmF7gAztgXHexZfwxsyNBfFiR2H58MBK4VkQKndUZF8WZUZMDdb8t3ExvgGgobrygL5omnxRLjQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z6tT73cv5VR1UkHtEv6w64x4BiWvs8hwcJBcW72r4Y9axMf6DTPvsA67ebh6ujpiPyPT6EFwG1mNTqXFFTLJy7y",
  "key1": "3naPPGZUsHzUMAdCdUeEHJ1Nm2KKzbUMheQqE8MtMaQbfUK6gzDVqK2PbKF5Hmkyn7oV18eAkcJeGzmjhJLqk6ri",
  "key2": "2vmnrVX66eGxDvy3rcFC9ZP4F3BWKHty6aqvxPQupykPgAgmpAs9eaod1p1nK5ezKAgcNjXYCS9R4M9USHGwjQ8g",
  "key3": "R2rFf7oSX34p1bLmtZ5erWiEA3LppkcYi1Lvxqk82kDisZmypgvYtRTT71iosWRBbHfxXsDYg2CYzLz2wbCfdmd",
  "key4": "3kfFwPVCP1PS4TR9HQ4ZvXZxUWyBygGfMKtXV2gexCfVPVkRwieBFkNwgwnmB6SV81sg5Ebf4aV7sP7s6dBceWUV",
  "key5": "3qNsejKBwWQypdEefndtiKH2jGEucctoRozMmYGSoNbEffeQZCZTCdx9113FXGxNmUnSc8aaJ5YQymqL6Xt82zvN",
  "key6": "3WqD1RdjfzRWMFMXj3F9ntRsnEyXe4oaLPLAkKNyZhJbYHYWKDZfm53qScNJQWe5KJYwGS5BnMctfmMyTkNjrtFL",
  "key7": "4Dh8qxLz9NHCwtTTXE3GnPKQvw9bTGC9fK7dz7yZjCE2kNx9i9AwBWa5a6U51xst35Yu5DqnAcGnbyHMFMcghNFe",
  "key8": "573DeJBAUxWD2YxDWoVESd5QtKcvyjvz4Fb62JEsqKrYVNiqoe9RFkks6BDRZxt7TVonYU7xcEapDnM2HLSSequ2",
  "key9": "2biY4EwzcCXXXHCrGgBg8KmgjguG3Pge8LXABwGLdj6F3w14B5TkacmHYWb6Rz93dAKqvmADqmNTvNJH3LfxZsv2",
  "key10": "5jwipKT87BQQMegWTaiTdsENRGrasXv2gaagQzShmBH4obYmiU289UMWw5ftNjCb4TWJ2AkQDc3aognQfqkv5xBt",
  "key11": "2JixoUVeMn2EtPkoXDvCiFe5vjiq8tNxrNWCLMbvww8UwEmtyYG1Fi5reon16LsyKzgkD8oTChWoxjskoNByzuDT",
  "key12": "3iaVh5ZCApnDuN9a8Gsgp5PKmqUbxAPySbdUxuuEZkvnUUtgxBsp5WYjq7RchhwSuHTTHH87Lj1sNgNPjo3oqtZK",
  "key13": "4rSZFj6KA9CuP4jCc9wcCnkhj1t89MVWfkPckw2W2Q52Y3ZLJgUPYrcRBcK4PuEWmdtuph3zNbzK7nUwxmrYrfEb",
  "key14": "5ZDGJynLEnpXPeEHt5UXhVnPc6L9FUP9zQjeBwtPbt4RCJczEFwcgHtjDxGk7yutiQDgQtvXmUxh4xq9GfvLr3oy",
  "key15": "3vGZA9oR7s3C31YbstPia2UmXwwq5T99PCygGypFuvCMhPfngbjYgoGbhcLym3GWLG7PnQcTXazMwh8KmZZZPjcG",
  "key16": "3XnwRbHTULG6B1UkMuV2s3UrDx6pyxK7jyh8KD1JcnhnShRybeb73mEcQxbHW8qEFrzcQ9XZy9u1XQCybwM5wYmh",
  "key17": "2dzAsvEgRMZweEDAbXRLCzd7Tkx3ALDjPgRziUCbau9SE5Qh1aisarANFRU2gvYtB1sAAu6PLtRtjUAYhLzE4ngg",
  "key18": "3HJNgtjx59yPp6dh63g6DauaxFLoCyvkk6i6bT8A3ubJzhRhx1QpGWqiEL7mo4HP7oGkEPTyYw4iFUpm6Hbz2yA3",
  "key19": "3SMqYGM2rnCnUK3PwuDX9b4t5QjRuG972374hZTAJTvao1uDZ1XXJREAobShCV2hvbeZDvSog4TutpFqX6Ky99Sf",
  "key20": "2QQ36NjRnuY7ateKWFQ59W9PpghHEftgEUNjYzYJQWVXSxwu8vnmGkz2U3knmuLJHPGUkaPC42aL8C6zA1nYykGG",
  "key21": "3EfqTw3QgGwe17pSYiB5AFbQrh7TNPuuA85YUv3xaMTKbAHmEZxPra56Vdjfpc3wcnfqoaGfBy71ZQ6EVEVotMjS",
  "key22": "5CmEA63vb4X6W5sBBPJ71DpEvKfRMAZkRzuy5TnYanZKgNQ1FnVJwiAJYtXbHtG6tK2ip6dv4aytkbnJuubH7xdP",
  "key23": "5ySe1TkwD8V5TBTkGmfLAbi39wtWBSYYzvqzhDDgvUzEr8LcAuWrRNCPQDh4dW5medakQyvPHnrEbPmGhKHbhvKX",
  "key24": "2siQRRAu8ch8sQKBegoipRYGgzXvA2pcExUT7DRnr5AoGSPrs4Q94gQHg4LbPEfiJxZo5qot8sAfBXuEunyswcME",
  "key25": "55Uh4zYqv1f2taacDRNJUrfucF6j3gCHs4H4vy4zg6o2T72MypBELkpiqLa1h8fSDZQTnceHWnjwuXYB3MWbrHS4",
  "key26": "49cj5V5CsrNWVvMP2rkYdaYGgWcfWrzTWop8cJT4QrzGbaS4R6gfj3JSDrPrv3jgLhBn4M86rSY7mxXFsan4jaRs",
  "key27": "9h8vbJ7H5TGtZzFx63Czi37DNShyW3YMSrCXikURSF5fAXRpj4XcwxArX3DLDNfQ3dNky1JCzDJNvH6Xe5gTve6",
  "key28": "3D3XGnTAhu9yCwJVZNyQNsw97vCdBBRvVq6p2BoHN8XnUHRRwjNmLNxV5d6BoZFpd6or2VqZowDgc3BWUNK91sGb"
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
