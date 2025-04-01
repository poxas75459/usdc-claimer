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
    "3PwyaRRyHQ5LqRfrpXKnKgiAvtDwSRbJ5iA97pYvBdwQmHKgfYM95kvX4gtswzD8tXpVAJyD1e13u7kpCampjQtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66V9xnRBqVyhaymJ6xrJ1N5FTRa9hZ6LxhQM3SVseBjHdVZ5tmUpZfkz4MNTc52tPpEQwTG9nwJsDjycd14xj5a8",
  "key1": "4yugV8nSFo7LWvAMLq8VGqWwGVPcHa33qEJWA8C8CdfXKjfuEh4j1FwQAthZYiPvqYSaksYLbfvePDNFZohq49oK",
  "key2": "4QZPFNfdPZsuay81Ure3YrCtCjjNUdMjSKfbMnDsULg2vJebzyK5F7ToxUBYMvuFrUUHdonSqJ9gKknARekpdfyM",
  "key3": "3X2Rtm6cDSuejpXCVSVxGH7daYMiXZAEVcrM18KhHfrKpMr7tm18mvTMNK4RSsUpMTRp5MTDepPWJdCn2FUKcU2s",
  "key4": "3WypoUf5uPFDVAQhiY1aNCh4satLRoJYmiv8UrUZ35snPViXiHyiLnfbG2Sy1E3N2cSs7qfjmrVfZT7gtfe727uH",
  "key5": "3CVfdUuzYadckiM7gpxkuQ3MfaeayLwBNxXUm6vQq9bL9L5os97iN8oGHBtCKX4PpYhmAp8zz9Mfoo8EKqGdr3J2",
  "key6": "5FY5gnDn5VMvwXwRCg5ioApGAVE8WvDdsyxX4CmDQ7BSKsW8WgsrRWZswt61rKDftnM2MHkXfho3Dke6s5T1yHUE",
  "key7": "2L6fVBtXjBAH9qA7UmubuhgxP5rcAZARfyQaM5NKkdKUzJgMrt4HGdUAxdfXuMJ6XdPzBbpkkqjnFhQ7U6eSHXn",
  "key8": "5WNuHXGqPNVR9vH3f7aikis8deJa2QNTA4Ko8rVsFwS7C1BMuBFwq89GopELCUmMZBoKSr1dqX2dbZ3dSkwGKvmJ",
  "key9": "hXY4BMXTuGW1ZqsUDMUz7weF4zAqAdZCTFDCbjWN9ycZvfQLz8FtSuSZNUuTueULrbgX384ctdDbGHoSBD74GVi",
  "key10": "2GDmrrH6vGvi5hYSyUEUZFPJybVvTZbhNxJdRC7hbBYFMBQuNpvzJ4SL6K5p9JWgpfUZ65ThX3og6v9vumbBeUYK",
  "key11": "cK8xmskSVXj6vAdhH5xFB73gHxY7SzGgNqEiDg6UzHyMQLZNFpZjzPrrEL5XVM5BcMwg97k13akwpzdwg2PUkJ3",
  "key12": "4xwiPyea5xuEKhARJtuKspgfnmC88qv95HWLoXgYZrz1h3sLQjvQ25vvLidmzU59qDDaCPVA4k1aKYeyVhV6XZbb",
  "key13": "5J8WtEqyYzMSdBCWLqwDec52C2GZJHRRVK5kGpdmkDrheqoNADJPA7vP7EofZffanMKBpJMTDvnhX3rJZb5YWw8J",
  "key14": "2tBYGeTNqdsmMPDSR3U1zo2AHnfw3ARL4XgFJLyfToeJpyAtTQAddh9JkK3ZUNQxPcn1VUKYYaEg6aXdMYxwDcJ",
  "key15": "2P9hUQMhX3mfik2u9RfHs1SBCHVUqaM4dbvEYGAKPrsDQu4visvmNZs9WrHUMhPEhTSnGZWLSmkGXysnSpUtRh1f",
  "key16": "4qT5FB1GSRhbpUaVmGKfkEvgZydV8S41kdtDsaq8RQ2WMaBAzb79yRXG7FUHXA4Bw5sBrMxavgqw3Pk9t5y6Kd87",
  "key17": "4nCvFrJ85YjSCbhVsQQLYtoUaLCEbvzjw1yEC8CiKTLrdPsLr7hKkm1hFN69KLojds7zXxZe3ua9PDmGGNUrrxAe",
  "key18": "2vGXNBSscMn1rqwmv91a1Mg3X1FS4S2rV19MjCLjPKVoKcwopJx8e77ztPsCYbsKGhAf21JC7EF97RnP984rHbeu",
  "key19": "4pNeRQ43o4aV9yjRhBY2fDnnS9fK2Y7JXr6rSjLB5y1Qwe7n5zW2W5B5M34PEKbJ2r2tt3QEB6PUCJJcre3rmKKX",
  "key20": "5sGhC3T9W2FMBKYqttbsau87nfuWB9DwCSbG7hQ3JY36s6Nvvm85WXM7tyGjJFh6pFhuGHn12qoHAEHCxu8bhiDH",
  "key21": "2Nf11wnvA8yjoCwBhWnD74L39twrumXj6fMrvTE9qAbqJRtzUyN9xFyP7w6NPAKf6Jx44Kuv7fJEMzEo8tJUBo7D",
  "key22": "5ovxbPhMvgtCbaZexkvc3Gzun3yQxHJr42HzXLng7mbT2iZuBYESVvp9G3fdikvMHYWoCzdP1E6EaWn14LH2hgzg",
  "key23": "4dhndffWj893MDRhJ1RizZh8jcoa8uBZVZViJggu7hw8CaxMcGWm73dN4tn3C1J2ZqcZ11eYA18migxUCJZa3cx4",
  "key24": "ewxVP6QVBYu9CAV6hjmyRoBuGz3crQwfT3W16ZofsccoWXW8Cn67iSUZa46VjNAMLTRo4gcSHW6htWNxtpse5Xx",
  "key25": "3TwJc1iuQSzyeoaQ3rVRiENkrpUm2RVBshZLvieK9hp8Zju4Pi1EZ54S5Uut2unmtJfzN4tXrTZTEyv3qny48579",
  "key26": "3iT1Dr7dPEAijsyChUw6xvVof3hzNdDTRK9w2ADYpU64M8CqLFZ48q4ndYcRLdb8FthvpkkzPqVYSz4VJNTZ6tZP",
  "key27": "jpk9ScANxoECSwZSDHDW4CFnvGMM8DcBoMXQb6YpyD4kSgMqZadD9LDUn8UEwYL1eTUPVJ96P6U7Sp2NPLuusno",
  "key28": "2xDve9iwWmBMHo9MCtYLbEtsSEW3uERazyP2rsBcggYKMwpYRfJHdEdeFbvE4erZfCRtiXxttG9YwxTJCu3CKiAt",
  "key29": "5axxKpPWG539HXKVccDgA3ZgzrMNt1H7U7VTkvE44vro7gKkZfMxMDZG1suhNpCM2JiybLXNze7erbaFmcTACf5v",
  "key30": "5YsyrpRWGjJTrmxPB7Vb4FnxZFe3svHWsEk7i5oHdRWXiUyMEaaCZ8kBGF42CweQwgtbPLGsALpq33rL39F6tn5Z",
  "key31": "4VeSouUMFeX916bWViFRrLWLkyj69GJGqg9a6hd8MMA1GpGgmyodNMMLCtXvtBmXQAQqV6ibqv8k6L29gtQFkrmZ",
  "key32": "GFxQCejq6xez99EsAAZtyZb3eUBKbGbTbDq3HhLcjVbts4Du4zn7tXE5vzMPL8JiCesnJQQewNQ8hdpWjaoZqbG"
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
