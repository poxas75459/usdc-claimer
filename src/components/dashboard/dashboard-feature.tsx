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
    "3m5bLSzrTuqxtuKk17jh1xjy5K25t23YLfMpBaqoGoTBYjJPbbtNGyTfqEWuvxzKfP8PTiHPGkCBgAFnH3UNYfp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22Y2JJrDDyuLeXEisXA7knnsG9Kv55bJArZH54eCY9SoTZRRpx3nbAL5nat9gjgqCQgzKqJYYAyECx7EBmEPmjJE",
  "key1": "5dfyUn79M38wp1F2vNhNkvzzG1kuPbNAaa2C67XSuWXCH6H1gzFYapCMVuMNrtZrZyHnZsZwhUCDzKG6iMdBLquN",
  "key2": "3Giet3scqSRTMMPywJrFV6xgcA1d9wGwHY6aE8Jt98QgejgZFG2Le6jfhsBvABuMZoQtyijd8xBkoQttH6zeA3q8",
  "key3": "47KuFkxJHN25vNpnSZRukDwG6yh7JqU4ZA4zmL8qkdQoqSvx4okZxbBJb5n1FMS2SGPxZ2teST7FV4y9Tn5iVHCM",
  "key4": "DnLg4jdQutruJZLhURPf7qVHPMkb2DKw7FXfEh8HbtC77dBWFg4q1RGrx1Y2ZeDZuBLv4ksmRtJbnGGeVsHXaMj",
  "key5": "5sKUX3CKZXVsgNXgeWCNqogx6kFfTxUDLeNpikT1rchFv8LTMeiWauatbE27abjTF6EcgpVseh9drvKC69sVcmXu",
  "key6": "4CGyb4c3NHvjvb9RyJMV2r1gqq3itX5GUepzkD8rx4vuJAkxHzpREZy3nm8iajM7Q8LJqsQNvGQ85esruccXcP9P",
  "key7": "4kE2zG3owgom2vnU8kMzDDp378wxbUG8wuFheZX2dJXt5QTtfHrhVLDis9EimjnZn5T9c149N4Dxn1afkw1PfAc6",
  "key8": "8v95S4HLN5k5xWWV6xHab8DFtGVAurJmTbbYmu6mnW4Ron64qYozT8KDvgfvnzDLz2RDaWUkG4Kua1Gz47ehw2h",
  "key9": "3rU7eMCRunp6jiD82589GV9ecq3g9roNHN6XPnz4TT3dwsto18w6MTyJUqucuftZAkqhhxPCijvLQq21NkTwLuj8",
  "key10": "2f6QGfh2kHqUm5D1BBnyFa5gdZUV9Uh5ceHyKZreDm9U9dbaXwm5ei9nx6kqLdwNfp1ta8a4bWy1FeFEJ8twPGFM",
  "key11": "4qPYx5CRx6FYJ6pjJd19ZyshtjGkxQPRtsi88YY5TxAgZRnqMHqeV2xecs1YDEs3rqAcQYn8KckAeEWBoDGuKcSn",
  "key12": "2JR2nnYLa2rx19CKq1THeMJHVhWuBJfJvWaHAdDxe79SEBvkC8mFsaMr6oje3EEzj8KAnLDU6id7oEZyiuibR1uN",
  "key13": "rxFsYQFUvfDBXH1ub5isrw3tB4xgsvfY77RBNGBBnjExLrMxjQhf4vsYcXmsMbVUz8hpAqgvskcNMYYDsbAaarQ",
  "key14": "4CQ9zMnM8wvY1DevCSTuApsoQppWAsdb8CwPpptXTQRAvG1rH2RaezNyWqKWuCt5VrBL3bhCTrG1CS8RoSDeCpXt",
  "key15": "4Qf6qNiHonYkfxT1HSenVwkzgT7BbRyxYrPmyoQoUhCkJoeMn7uM2Zvs7LydL3URi8NRHyMLZNgDZFGWnCic4rkU",
  "key16": "3vwHqWxacHh13imaA185M4h6A7eC1W3PkbSaE23PLN8QfWdCN322nfoihF6RCXm349BRw2ARKnjUxg3GP78fng6y",
  "key17": "3oWbTYN9ZweZKbWMqzspJNWpQBo84hWk9kNZNPwaYquKcj2JU7EvZuAQq5pkBfbWXx9CwW1LjZDpACMnK47gWDuA",
  "key18": "413Ss2H3dsALuoCBWVfPkapJdZPMUrk6ZuoKSA1YT7jqx1iUCMGKuNvX13ZsLc7yzDwpgbrarXxj3xrPQLrCbCFo",
  "key19": "4Ebh2CmVCaPL2swewpFsHWWbM5unmHjST265HUdjGWwQbVVPdsuW1DwqhTKbkaU2qkGr5DZxX8hBnifPNuKniNqe",
  "key20": "4a3DshsDMy1AH69mnfNQm4om4QSmRPsWq7rCm7Z9vePoKsxTGJjpM8ses5jbztVmhqtTUTpMtFeZWDoeJPNdHLVU",
  "key21": "5Cvq8NkAks4DnuJwm52TmKwLvT79GGjLmc84MuhNjfVHcapt6g9i5wHsjQ6XFFQNNyzBLDVKJ4vWtJkaQ92eFYJr",
  "key22": "4xFPpxRR2TE9B19fQhGPbwzakVu3s8u8Epvc92zZzNLqKCbZdCCaoJEYsjoWna9iyv8DyKAvNo8HV6F9wdECYNsy",
  "key23": "kB2DMY2QCNJWjfdWASdbWMiEJGnLLhY2pERhaCjFifGk6YLZsDeEAmXvGkXtA6mj6jwPkNzdwH9YsrimX8E1mg1",
  "key24": "45qpRmm6QfpXAkkLW7C3z2G4i2uu37hAfLteehpm5Nf4WN7XPDdCzb4kbLn52uPqy1h8ZR8MEE8tgaW6PL34QufH",
  "key25": "3QDnbRFdqTiQSRMgkxucJbpJXpcV5xQWnT1L9f55nFVaMvQZWqC5z4fFkv41U69UVfDJZhiZ6vFVmNYwbyahNEvd",
  "key26": "2CKvFyfeatfiPLvMEP8aZihgR6221jYBoCiJPxvGZeG4iEUYuPzWE41TZoUNDSjnPn2janMjMrYACi9yjMef8KYC",
  "key27": "3C3m1mHLCdAbpDj3LX7ELch1GDaYT4ghQAhixFfTDzdnvumjzZ6EoPujhi2UkoFvmkB87EfnUQACgtERncS6Xrx",
  "key28": "3xMhKi9u6gfGraYWvEt3quyirJCjFk51W4gwEW9nB7cwPW2jxsqwezRqEsLswYPNgybsi7KwUq9NHh4zy5dsDMvH",
  "key29": "q5dRUfUczFHmso5JetSQmmNqB8xb6Coqm7km9SJKaLSEwcFM7AqmhxTEr3ynVgi1cpLY3Na4gg3i99fnhe1a4VP",
  "key30": "3V22eBCJL9hfoEggqtb1bPEXmp3dfNpMXQQSesQadv5AwWaMwseQd8mSV852KTUEfW88PVJ2xgQsFPy9mm7nT71X",
  "key31": "5AL4M8AGFszRtC4LTmL9v6ednYU4tSxXKnJEK9mhfYQ97nJKZzmxFES8bVn7etkirS4eWcKeNaxqHzz9MMTC36MA",
  "key32": "2tsSdwxs4B4nf475k2CGwSVz5ZfUpCtyTifXR54RNbg5Zxe5HPpu76oPSTz8u9PCy19ECY9ZVdt72m5RXAt4GqA",
  "key33": "3USTkZ9mZAA7P6zqmwbJQ2ZiD7VerxkJtZb2anAA9x51kcTS5HyFdo1V3E3EaWz8qVVb5x5necnBBL7Hi85ehrXR",
  "key34": "pVpL3PBNsxG7K8JehosmaruzLGyihejdiQWTNUQwnisYUfoUUqbrh1cvk3BRuhpWsEN4KGFmBxY1xsMUVpGGKAT",
  "key35": "4xRD2uc4sf9Zqd2oagHAhArJ8JMViiwFSd3NE8UJkEH5mkLDX2WN4aiipLxwxojPFS5BxUEHQLYTyJYjbgVMWqhj",
  "key36": "4A8HFi8dDQDdSG2pB373thLFKqJbUPeFjdtddXitnZJq8AYHhdZaMUxTLmyVbaErPgGye7QZ1eXcwSht3vs2eXjr",
  "key37": "2ZykHnXzFynrD2MGtMU5KDKihFNBBd3aa662Prqj8sFhj8UiDLykSLJ85uRTRLRxj7DkVq5WQbDXmhXvSxDkMkq1",
  "key38": "5BMxNBLYV8rcfhAzVNszWSTCr53XaHFTFFtpFBwswe8qEUkWxpLLDyMae9NjXRzyfFbnkmBVov73pz3eEFGehVSP",
  "key39": "5WidpaQf2BxYEH1qeHMVNuMiDJt9AeqAsYBfxZqkpqaCom6WCvUpNFVoAd6VCiHGX29qjQ3yJs1jqxLt6tmzR9i9",
  "key40": "5V8TwJeJ9GT9EFDUFtBDoU1qexyTAru27pt8QZhVc7YJQZrG4L8XvyAbRMffmJPmgmyrnEdyyGGohcs9HiJZgo2R",
  "key41": "4aP5AhDxUoWk6yTsY22ixL3sVUvfGatF6UVthkNT4V64AYaifc2q9cvbYvEy21E6qS2poQahSaYwUvq5wWLkWG98",
  "key42": "4TCpgWz3MgM9PKUL9VKaMrJQAKtqnBAM9gffg1M9PZQBYNn8KBSppVUE7KUUAip1Jib1hq7KQSSBxawL5TQiq5uB",
  "key43": "5GQN3nSCxvbpCpfiHZCPTEkXpJbNmYfxpvaBXE6u9XKpa7K1kWdfUKwFfwjSwuorod7wZyJ83QKRHguuYAvwTGX2",
  "key44": "3WBr246Y28DisREQ5KGHoWLr8gBKscrZtYGDojcUNCfomoUEhRNEDbcmso5U6vv37xpnU24y7uat7byn57fmDJGV",
  "key45": "5DXWi9TbVeT68iBNJaifGfXYWZ5DvadxKbEPHZrph8QWDA7UJjeuvkhZYpfWbDP9cKmsNerJkkxkq3fH6hDxMvgN"
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
