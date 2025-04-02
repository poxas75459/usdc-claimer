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
    "3M19kfznHhMJkrYMte2fGfiVzU9zhTuSrxHJgSRogMApibcfN7yg8YrvpX6C2ZyGLAnQ1Uf9RpXtVyQQBRMnCBr7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BSfBiY9S8kzRtKzHXJheEQzbJmq8NMY6JbbD8P2khFpPdPHsK8crZvYci8xd7P1MZTJ34MYQcQtSHz8NjS55yXC",
  "key1": "3mQTuZYUFcQTCMQY6xxKS4rCRsTeguMBvX5WockeTxK8fNACjXNueZqQu9bYmqiYStxrwDyxtw8SrgnjceoFKHza",
  "key2": "YkFNcB1zEkQgL948Bd4qfAUWmLNhukLHYKdGW3oZj21k4Sn95SfAxg63cegxHqt3qTQBYjE86agXE2v727GGTTV",
  "key3": "56ChZaSg8uCfdUW78g4qLZjywnJuk7bTC6dkuXGJenmsr3QxE3FvKVV4jrqybucLyhwCbNw7KWY17q4ceDrn2aTY",
  "key4": "4ZCW4wZp8sgtssgc6DTZVquj6doCPqnfEWrxKSuw8DKK7rT6q8mHUgSoFAZAZrEnb6kEysZL36GsCLgJ9U2kfBM1",
  "key5": "3ZnoDf5nwcPikGyyiTf2QFmxk3oGBDR2u8xrdNqL7CMXV3mT4ksXSTgTtjUjESfW9eg75r1TSbFC7xftRwSLuxRF",
  "key6": "4eRzMn7hzVYYbhxdHXt19HBx9m7NgwBA9NEccUinfVdBgqDxUJvaDtbWwCYELDAPgJsxLm3jhd28X5dxw3UJmcX4",
  "key7": "3xzqzbW1UxP2XTJLXYFXZgEpty7XhFHTag85wFP8pkLaPNmMuqedMtTvzsYLFV6UpxTNugZ6SbGELf8HUYoL4Hwg",
  "key8": "2cBnXr3m9GrZJr7ds6DuUBZp5cHeqG9f838ZCdycMveVgqp95HvacPX4nsXkZgjVeGYRg9jDv54cinmB2hBgA3wP",
  "key9": "4Qe5FKhf8xtWDooZceNgtPjyw5vn3hCNJXDpW7FE4ZdexadBt4ZJZThCA2y5f6tmDw5udrcbCe6xg69t1934i9RH",
  "key10": "3S3daE2zNhMjLTThpUqTq31Fv2JKNvRLfJcv8uDS5jknKvFyBdnLoSicKMVJ92c37VtV3YyWL1biLkBHgsSoWB2i",
  "key11": "56GfWGNAakrdP1k6svnnJbU67CekMvb5X1jEWxn8RN4Fq3KMVV6wywyR83CRvbK1hbnKYv1adm6WdcR5idAXdBNt",
  "key12": "cwNuZZyB4V7zfGPF2QRaxFHkPZjwaudwSMvq9rCT7aAVvarMkVPQxMea4fNhgmosgyczsHH99RoXrCofkBiBgbH",
  "key13": "5GnJWYHKaWPAyGHgTewfdWDVDSW8z8StJq6QBfShM1QdRG1v9JrEAWLCNfK2XMMeaWaB6cnAaB2gXxQbxZUJUhgK",
  "key14": "3XKhjVDfWAUPNsG3jgQR6z3W6xTGAMhjbqWEmzUtUCPDDLMDvAj8eXcjUk7jNGH8T6DmT88nSyKUz9tjuTrFyxU5",
  "key15": "358Xamh8zAoHhS3iXUCQeYhpb2D864UfcLynMMQfboib6Z3Z7R2uVzjBbvQfUqHB4EpJTAuCq3Gee935J7ZtGV73",
  "key16": "5vw8N6eiF3fn1DyctEnzt5G9U2D6kpVCszGXX9DviPNSJGHbyCfxT4kiXPdvmLwkmc5EaSuLRDvq3uWC2jFGBCrk",
  "key17": "3TJgr6GtAfsmsNA1BT8iZ7w3ccBRuA3oWqrwAr61JsnujgAg2uXETwisfgYKfp226ynRBoLhD4wtL27F1V4LRd3t",
  "key18": "36KhfyphDQSGnrdGBqv366y1JK62k9kXGLkoDskt7rJY1PV4w5BBA4U4sRPLWirLDLpsLuqQCSnoz92weNYTQdcL",
  "key19": "5CB7B1bgRXK61vu7E8Z96Bg5sN3gP3AqjJkY6cHfNZB4yyhrmXZpMLM8727TtPK4ihnBG7i4ndmP217Gvbzo8tvf",
  "key20": "5T2vLceNBUu2aXbpzmBKoWY5wxqJcnQhK4T3eaoZtvfNHdhmYoLHWxJrtS4FRaqcigGfbbZGSpNPKFpv66ZySCuc",
  "key21": "39VfioxuQij86KGuivWSLjXxAMiAJvK3q8suhSm6KCmJEHdvNbu6QceCDAuHTJiz9vq8z6Xzi5ajCScC7LJkfZTw",
  "key22": "5HfxTj4uVFz12GrJhFSArfqYSob2E4NAmKjjzJKZw5RYvhu4QkoZ2Ki6ECY36hm3WpAXDG9DaYGcSFcBz4dBmQKC",
  "key23": "2Bqo2FKW5M6TiXvUp7SZtJpB6ZtDeNoKENkGwLMDHyxoSzfcGgdwdbiQBWrVu1LJF8LbdDpqSdYQsrZVQVpBhXGi",
  "key24": "XnSTE37e7AnK3tMRm5UeAk2SXxmUdUDaYwhshnBuYtcnPzA31xiQs4StC5izAhkak9QkkHjg2cLDaeUqMv8fa6s"
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
