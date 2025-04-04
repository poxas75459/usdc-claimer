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
    "2USHyr9pCdti7RCz7Deg1UQc5KFvkU2UjubtraGtJyEWCSFME1DscoGbBsUjbyjj27TxowBpLHjuFg6XtHEzLyXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fK18TNHd6wrGXiEVr7izZj96qnjQNiLrkAdgCMHdjTKjgynpiwHzWTMiBncREheKh8TAP66yJMfYC42Hq5EhVxz",
  "key1": "4DMfv91feXGywFHWFuvFNDu4QLrookXBQ1jLUhQiUXRRMGKnx63sPRQ2BpV5FiZN5MUDDTr5yf61JT9Lqh6uzuAz",
  "key2": "2J3KhmQCQv5RfKcExx429TRhtPwrTeagHcaTo2nzrLnXeYPxxoTZjqyfFTeZbBTrdACE3Knmrq3WmJuPWXLa6Qjd",
  "key3": "5RewFuifCCnjkPcGmgYgL1qxoYQc8F6GzRaEcaa3hBm7n7wfRXKxFxAC1XdiRJQwzLTnAdrmNDeoHxVWjU6yPNgL",
  "key4": "53Wf32XxKyLDfkrja5mpSTsv7CyVFAJPCPRAu6mmnAGfoGcF4xkHUQWiN32StQ7yzNdUaUbEQqQ12efJyYxAVo7s",
  "key5": "3wnEeMmZdc1pVfF44tx2TZmsMMMRLbgSxvpYyfXye5qdDWWTdJ1bch1akbkQsp8CS4wNobGR2vZJzv1uDQYkYDwz",
  "key6": "4UBnQm9ikQyj8Mt1XBEXEBvKtjCK7H4Dm7KcxJQGStTL1auwJiQZPxVGGNm3492TWzMbqYqCMY2dGQvkD5SVqyyi",
  "key7": "5tztKgDkLPEoykEDEdTgZ9MWtr49YaaetWKWxKdi3cTXKCDnPVoPGrDosNX5Sz1UjMyNfMifcgsf6X3MGB9vLcL9",
  "key8": "4FfMkpdtkT5SAZC7dp9NHMTyL3d57amed4EWpCyqzMzpgA4CtjQnotK6agofEsezD384PF3xqXc7bGC8wUQosebo",
  "key9": "3Xx4oJsBX7wN8T4vYtykt1PjwyiGDEEmaJQdGLrptEWiPSYwqBPytebKWtirtjoj7GXcuo6VRZBdD3NmYtodkGXu",
  "key10": "35XpsCJgqiLcvWrgN1cvUdpK6yzuYxrwx6tdfyH7DaGAg8nbZ1WAY5XTpX5vhtGhHhAQubLS1wSUHMkTuh6jjxhe",
  "key11": "3p73z1CNV9oiRDy48M2C1hWkh7VAXQHJvszUaofWgF36N5kSQTUKdB1WD9bTWgM2VJiriTw55RaxbAfQVUjuLJdg",
  "key12": "65WBmxJUHL8FvdvUBWkjqSMVNAJ8C77MautM6M97ofm2Gzw2rZXf4iaGDHbzifz6Z53bs3KrFBmiBw1HexuCbUTU",
  "key13": "3nwZcozh9geHRftSMVX9svXiMp81AzWyQS8yuHum3XuXi83r79rRAUzeaBKznxd5kuHGmE9d4JvN4RTbaUTVpBUg",
  "key14": "3SzFRYqJ4cVZ8QHjJNLVpJNiiXyTDzC3XnBAMuzUc7iXWnnKzaybjVSL6e4rkNQfXLkjSSDWmpGAweh1ikKqpajU",
  "key15": "3bU5TBDoAETm8TFRZp7JCgsvTmEFRFwHbCHMFzKCDK3LeoJzCzbWVviHMDNBGC61Qi7CkeRPbbKpk18urNfteidx",
  "key16": "5kNiKrsxWfg98B2Q9ouwhPhvEG2K8mzjxjPoWnvSqGYFCvNu7gUm3RkrpDCoYhmK9F5GSzz5oFAXfS3MFTtzc7RT",
  "key17": "2ze5cXjDoGcZJfHawuf9QbrorSVtmtHp99Ufw84JBZ1e8S1zSqmdqharAnjRRSbW5AzpHYUmhXMQU4nHtozrxHcP",
  "key18": "2YVxh2En3ZGViEPTgud7Ke5PmoagfFAKHhVU3tJK1M982864CRb9zz8Rg3JKqEqL2N58h8achsjikSAN7KvTsyY8",
  "key19": "jKxUSMfognj4T4nPysQRNZ1TTEkCP1mKSYFfcQH9HDWLDCcG4VD4kt5YDMySBsXrYS5owJudbSNGNWzhoaHepeo",
  "key20": "3ZZWS1cMaSBZHAMcQ8X6JChutAr4aRMoQwsyTTuWP5vZqARpf5jW3mea4ieXe61iuC6PGvkGVZgpXTXbYAMS3fBS",
  "key21": "55hkSBWMUyoNaLNrj7cJpZSjepnWinciD3aJJ7uHgcefkpshxP1V3WXdZDFY17HgZCn5aj8xbj2krJHWkjbWouE",
  "key22": "r1D8UbikM4PajBRdoSWg5ybwNAT9ksVU19KWqFMuMmc4CMw8zKG4vidwHEhYrAxEYYrnNCDESkyQKz14GaPGHyN",
  "key23": "3orpxPNVSDmVYuWXpK2PwkxPCQkzfZFtn6p6xYFkTy6Ui6Xhue2Az8CA3qP9YdZsQBV9vyemSdGi9M5pMX3SR6XW",
  "key24": "4zq74kiaQPecTyRVhQRFsX2a5HPzjhEnJJJ3m2LmsKyzTUmY1cujwQorcsVS1fdnihEymkLUkv6iN529XPzJZTHt"
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
