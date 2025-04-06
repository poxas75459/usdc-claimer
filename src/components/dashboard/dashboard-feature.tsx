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
    "248YTJaNb5Nh949GwX2bBTUWiduuAU7RXe9aAtQi5W4kA8Wd1cL6fBKj8kHC5zC4FpCENHMdLjuhquViTqYJPd1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "551UDsSiTHLi7cHKM9HiQoUUJ7NED2nqMGCpF2nZL8T4R623aqV1pVbPm636FDGeeqQ2FyMWe5jPjU1jzNiy5kA2",
  "key1": "EbjgSZSMKNinfNzY3wb7JRjoLTLWZ8wXpqvPCagJRmk1ffW8gU9XsVh5XSU3LwBspgTHAojg6b81h469vZBiNzX",
  "key2": "2PP4Xo4UKPqRrAog5jwExYT4oYHhLrkxXwMvMCPM6pCedRDusvQCfvjTWhd5dWL7fs3DGYqoJ1pbN2LDowAq2Do9",
  "key3": "2oARVmxJkmVNHnEorTuyXaLsPZn5SSHHmLE9ugDsQbg1ACE8j8UNjK5ugAG5qLS2dra1TGhwdKJBR1MgCZXBSj6z",
  "key4": "ZxjE8PTZETn3qFCr7p3HWXdPWh21q1rn9GbdJvtx3R1uKHbDdfCbSR4xfXdLgELZYD1eBe6QnxetMxt59vvtWod",
  "key5": "3Cnm1cvMvtiKccBNqzQc57q2Kap42Mjk98VTy1mrpNmGUG8PL7jmJTSuhrJMPZdkZLkNjTAH7CqhCXPHz72eso9b",
  "key6": "rjTFPiUAJWQ1rcT5XyeKpH2LjL7hVZ8PQLRoxAi2kxdmW9fTZSvyyoNoaF9HdxvN29yvSYagvpngET6D9qpRE8x",
  "key7": "5tQuh7Ua2aDvMEp5QjCNsVvvfdCkjmuTqguNcUJdfKnkY3fz9MkQmCVaSX7KVhrshRPwUWxLiuh8tQeqsEoedYGD",
  "key8": "2pTqNKNPKPYAHHdvni8mcntGt7PD9Bns3pf7zWpzzgJDyLjdyjZ41x3mRsaYDSUGgnZhbupQ8TBtx58W5DPLRhfq",
  "key9": "M48Zr7NUuHd8TwjSsGrhCrQpnNemusy7etSt2xuw73PyVP7taE8ybwoH9qSJZHL5UbxwBdVqgeKpCeecGBNrbZz",
  "key10": "4h1imofQArMGB99xPipJh4gjRfmcgyCugstYtzoVeQVmuok2r8dYrTytFtU9h1ehMEhPfpm6aaybKbt39MKqFhHK",
  "key11": "5aaC5quH45eUojSNSwRn6Gap31yKkmu3SK6d8M8RjggWomyV4HoJWQmv2MmQy3fzcXBv3nHNXzcUMZCiiSzR8Yoy",
  "key12": "4TaB9yiaXqnLL9KJhTnojFMtoNsdTjJSUvb3hjbGKkMiy2StoHP1MRS7nV4MsS857iY1Mf3WAQddogwfVNkE5Kmu",
  "key13": "5wtPkNVLkRFUnQC5V4Rw3tawGfRf59zHDKA6Yeib9hrYhpkda3M7PkUJLgGkSNk1X9vEauM4wFSemMfgNY3aQFem",
  "key14": "4L7NFv4oALLPvG5knmfPo4ogdCwGdf6aa7B3Z7nKGfrrY89w8LTXd9fB8R2SRp3xLFrW3R1CAKquUzpzLswFD42Z",
  "key15": "3J2WyfyfU8rp8CebKXBXLVgARCMPGbsu1NKzxP5vTzKMD9e7DJ45MgYqfh9s3HUq7GztpYULaZovuiFeRPCUXbmf",
  "key16": "yTRf6wB2xUstPZusx4u3gXQAWqG628uEYEt5MqXLAgGPxGfY9ednFSEEk1gRytYph4su5Sunpuvr1hHVXEkZhpL",
  "key17": "3GrGJ22KArdvSuAYW8cva3NWMKUxKi48y2wEiqX8guqgRrarJNniqt1QesYu2keC6iJF1Jjp5t7hwxwmFR5U4oAp",
  "key18": "58v8jcwLTDPAj4CYebsa4cSNQnab6bDjSNCSWAZCDfbwcP4muJBbjRDFe5ENkQRrAicLpcMtiYNaPUE8fxMQckSW",
  "key19": "5AWDXAV1qYrkLKbregFq4eNY2PifrdonCehmdYirED3wrGR8RQZxEqvq2XsMRsnReEoBFBVsRAyMbCJdEYeNsY4R",
  "key20": "45wGgCzgd4F8EM9pAYuYCSapy5Lv8Boo3ZPnrc7KVjM3beXvas4uRijrExBmhKKiZ2GJqia47CFBCpfa78jRKJD1",
  "key21": "3aDMcEMfSesMUMKZQr13SoHz1gQUQmN6L2iuXPkrpc8vuLtrZeXiDuC4ZoAqKQ3mftZP9Dpx8iPP9jAvkfk7ue5s",
  "key22": "2DUM3S1rFqeXMT6oNEgdy4FS1sDYeF5YgtSYPFYnrVSv4a2UNUkBxcw5RoksNhWgjPesZx1iSLZLvpEPd6Tfqs7d",
  "key23": "m3fEHNZVfmhX481nYQFfFvrqHGnA8e7S6GKxNP3UsVzpc6fU4NE3Uhg8XDmQqJexNTmDQjCWom2uuGjaMUYDCBJ",
  "key24": "27gotUe8qkadxswTvQoCQ2K2icXgBXh1VrvqG2fmeeLRpuaSZuzqx7vowQAbhhSFjMnGZF6eoSUTDNyRbxY6enLJ",
  "key25": "txBqYxTstpssSC9HksmNjmUEbUJ6Jp8LfYi9JUKKU729bfiSMzqJhALRZ4fRSMq9zrTxBDEfpai9t58zWyUztDt"
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
