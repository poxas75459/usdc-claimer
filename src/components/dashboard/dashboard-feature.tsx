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
    "4xmjPvoPGheBY5wYa4aFZskvNUPzSDADv3gdE1txvfBCHQSo6pqBPHc2jVu91jmk2cFZhqpfHzdvP7HfbUbjje4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qNxMeKbGcjBz93AFi7XzbPjgK5UbTpFnmPT7jKuiNRFfKUF391UBSj6LXBGnud8dkDacqvk27ckrBHkkWB7vy4w",
  "key1": "3Q5cHR7y7niiFrer7A4svunnG3LttUeYSUGokqaGTAbijtrc27rAVLZRR96jNsCrDZKqDvTF9jVSFc2ybfF5KPec",
  "key2": "63ZFUtSbFfPLeYTx915Q8NXHbUc5X9pPuMhCUVa4yRgikR6DwQGXM7pZGB8fFmzAoYyWBgWbdQdf38oG4yb5fa7L",
  "key3": "4RZHaXJmnG9VsByfcihVhzGtgr37yky8uhdSZ1Fs5RFhGnKAtu46piW94KaFAWU1DenqJxzUfzY7THvTw7vJUUMW",
  "key4": "58XkAr1mdiGibUDit3ZvUmPa16iH1H1jgngPmP52XpPgW2wWyEQPanVeC3rNoC9Y5vRoecFbi512aBaimRjBX372",
  "key5": "3WuF6gSDT7CfNZrjAaPZd91nhVqPZCkLVa1yVuhJQYnBRy3BKZPb6u2wTXVzi43His4ezhSTAHKjewKRrvcHAbG8",
  "key6": "3PyAbPUByAcnaGo38zeubZxSMcycoe6cbZ4kvShNoyV1JwyNMq9GrkkoJc4qmS3wVN9yunDd9bULVbygFaoXijQz",
  "key7": "67UAGENCjU1M8RszeKaVHhuZ9UWuD9aYzhKpw9WvFWG5Zp27WU68rQiidANTyaypb6G2F8K1nrGDNik2RH9FWDeB",
  "key8": "4grQUp3r9FvSGx6wvzg4BPGcnvP7ZzhitVvBWEpHorJeBPmmbLsJrFqtoimP5QhZeFGDPjHhknArFNsgjRQHTrYQ",
  "key9": "3NAuhMS9iMk58J8tcSyqjmL8SMEHJWbhNdMPDhXkiNSziE1bW7hApwVLhkKQVXPyTreZynjz6gwGEVndQMuRisXd",
  "key10": "5ESwkns3Sa2feTdLSqVwM3PmHZddVsgFHFFNzwTGufryYUEUrRBETnUyvr1WEHf3Kqp819JCnEZh3w3gFdBXuRbf",
  "key11": "pUMbBRn83aD8s1Utq2kz7rhLvopcD1nF2VKcvEdVF7AFpEz8vhGi29mfvyntow9mD5PmNDqJJAhpmMLknJEWkjs",
  "key12": "hLE73SDmczDC9pmSrfxkpN1ay7XVNMZYNQaayjz1avfrRrM67ttuWs125nweAiSWzHnaN3eFxaZ61T7xNPgAhfs",
  "key13": "4ZoaQ33jPTHpKi6hqGx5AN16JCabLd3vzMBma8Ps7WFqnmmgbg6bmm4pDgcnyMWQqC96g4yenAv3jAD6vifvmAgu",
  "key14": "5e1d7fBCavi8RqZ79orewMTM8GQu6wQxx8P9rENmtiWSho6Z2gDxE896uQRU4uTSh8NQ9BYxAeG9qw6kcL9XnVdz",
  "key15": "GXyP1oyYTefyGWaCU21wJ4pv1N46EJphaCsY7WqdD5K67Fdcijsn2jePDFsLCmQCUkS2hKzgmG6Ha8RSfxJs2Ly",
  "key16": "3UNZojdUwpYnUbQpZRagCXVHrYA8re9tvZ5zgbSVdLh7JWCCf7NsXvw5tfQrLKRUFcYrTo7JTtCZ2nBcvj9b57TY",
  "key17": "22S6rEBh2hL5Rj9Bxt78qFP7S9NRMTpabWJtxL1JMGdNe66btiS356qhCZ7txt8mrZa5mtECLjJSCCQv3wyo9TYU",
  "key18": "2MQUQDoJ5r2trQh4PR2csr5V6Lqi9AfzdRfEKrsna8W85sFnnLBJSLQcH21cXvnkPCLnp5ArE7PWmPzLBU4r9jaD",
  "key19": "4WDrsi5T3znsoD7ncnmURcZvWENpcR3ES2EZmDsaRGRYrMpZs2J8b1zi66KDvgHbMAwdXBctt9yCZwJjgp8osamA",
  "key20": "jNUxn96ycpthmodft5PrNqHgfWHTn7iRnX46s4iE72sCcRUk7nvPiiiNobH6uaRtqSyBDcXMnAT1ZrtSV414aHv",
  "key21": "5uyswYxBeMVLTnkvHMVjpWeDjZmqXPgWQ9t1Eo4oMsJFWpWsDWfkVhnn1Gj8fQVUdQYQDyRJ9h4SbQ7siKvz1bv4",
  "key22": "2NcC79BTxJ5n1kMmbdbMyaQ4ZeLe686RgnkVxcz5hzVtsCafsFjQ8LYsLKozuwDaMTJGov1ymu6o8BHc33F487mp",
  "key23": "4jjRFQStRc3QpdCbha6grWFVQLjDDr4iYtgyH2nCU6inLp6bP6PDf1GABJM5XrXNA7nS4gyagCxWxB9AaMJeGGAp",
  "key24": "2HLegQYv99LHUeDwCZTZfQrffK9HTUyPsvdAi5c67aL7GxAjxwRsEWj2zCy67d2Q81AYy977EKSTtt9Ngw1nFy7c",
  "key25": "NYFHMWKXPrscyUhLZQ81kNByZWDTHU5mhx86V3PNKyfGiXRv2H4knSFpiYoqCQd1GdxE51LZdZYNTXWgrumiiTe",
  "key26": "3tdXevmrRyb8c3F9oHRCGci1J42taDQNWE2yC2DENcZnT1UEGCfkFHBRgTGcMMhXqo7JYvQRNMbpqBC2rRKjSYq2",
  "key27": "JCwCPagHy3ES68qgJvLribGpBYT6Rjoa8iwMEfkdusJgChEQRt9PyESRNXaVsf1sSEjivPw6emAScfZ7aNdUDYo",
  "key28": "277FBhPju2p8un2hd3sWwD6YVAGN3gw9wFKNQsu5aZx6ZnEtiTLctkAJUXdbkfutLUFAqWSxNcurR9hqtmmMmikg",
  "key29": "5b1SG78u1XDjKix3LY1n1Zo4jRw5LY6FqeriKaCxqSybKUo25yeyp8JzQiF6zgSeZYkF8svYWSM7ZjU2mQBxn6pM",
  "key30": "PSXkKeuM75XmYFisqV5AKbp4sufECcXXhNwnbk1Qp6rujK456tepJ1RFaPkPwR5sZjKNYNw3ko9yQ1qGD4fRRjJ",
  "key31": "2xiMTeG9BtDb21Dd9uAdyDWGfuQG6brfUPsgsv1czQi37WqdmQDXZzZuoL2HToYtinaAWVgTZmzMVJ6BeyJVQaB6",
  "key32": "2NdHSzqqr5s1XVGvRKpYetEt7dwfucV7LPZsGvDxRKhmGLRk1C6ctTt56oJHk3sxcfDN9JEPLgDrzYAKuaASXTww",
  "key33": "4z8R8tNk7gFhLCfjCnVWZ5C5prx8SjaUC9TdfcgF7LrXdE3SuKHQKBWLzKDinwdBzCoyTWCRDEDpoqN8KXB8Cd7v",
  "key34": "QNta1u7TxGDxaYRKE1MHrsLAgKCEfQ4BMh53gq3UCWfj3CHUuufxMf8fRWbcprpYq1dtiEJgKjBwbxk7cswLAPY",
  "key35": "4sDNTAJnGcFeM3Lk9FbJARprzZAjtQfq13NzMmPkparWnRxNGmTVnruvbEcbJ7FTdrYER1uAhPCQYuQtyNUgiJfk",
  "key36": "ZqgcnKkkLSscU9Z74Tq9YbKBMmXYteFW2pJ3Gr786hD2UuyENxodko5xzCZwP3XewBJ7EvqpWTkQaDchGsTDESz",
  "key37": "3h9QCks5hP3K6h57cS7JbHMtrEKmxb26Bx6YirPRtcZM6F6M82m4SWJY3aMUdAHbAzeUGW7fp7QoGhRYCYws6eUU",
  "key38": "4Ho7PbGbVD9CgSDLJKUn9Y5hb9GGpchNKF5iTW8oosHNj3fFZqQrRekYCkQiGSJNm9cHCWjFZFrbqJc75NwQVgHq",
  "key39": "5sUQJbfSZL9Pav7dh3pTNEZ7ZnPb3DHfPAjcioGpNzBejaT2QPwvBjZ5C2qxXBbbioaHm6L15aQ9H1pmqztVY3HJ",
  "key40": "5gJfWePxzP6JDVnrPuBmnUWbVufwooMzcVtmfaVGrYFUV23ykZxRuDZZmRgtr1tVpvaRVpxSEMPqkVKT7tNVbKey",
  "key41": "3ZNwscSGURa57XZcrsoizeCr9PZaaApc5GpD1mF96FGrcjAwCALowSNq2GxZeyNz2XtbvnuptbLFtwW8LAicCWBe",
  "key42": "5SSu4JZg9vEzFa6vTiLgUyoLBVegS2XAcRGuHYp56EPQhcsnXLoVitkHwS759NiFxvBKgbyedP6CMw1oMyYUbsSk",
  "key43": "5syhBR3yKgZL9zpDWzKwG5cyvzfMUABFSa8uCMBSfhBKP3WD1G5kqeVsnd3FpLYYSdPi6yfvhXfvPd1TwdysUmAs",
  "key44": "Y8aMpiy3X8ZiQuuyBNdtYdyeNjyFs5MSSRLbRziz9UKVx3xuUR25xjTLKwq9Txw7k5oEShBi9tCJyCVBw2hmqSD"
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
