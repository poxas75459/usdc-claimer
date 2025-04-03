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
    "4L8Q6X6T4WQfjkAd1sGirAbzYUVYFtfeSwQRrXeucZvLpS4nJs8fCyE3J9ZWTTWeEUPsqCQYLDhtnAPG1AZup1md"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ydc6eZsucsNSjuw775BSW9b5yrTWf1r2wAmpbJ81mQpbXLXKJ2FM36Y6rR6HohXxpMK6cSuk7NWJQhPtoR5WHh4",
  "key1": "4wG7WCUnwefh8Y9eWEErJSKbymA3cBPzASkUcNe6eF238kXA4yMvKqe3SNFECnDHFLsZmgpptkKGE439VHdU6FBV",
  "key2": "4jNpJVbho79e25PLSiwPRkcmR2mqHYxxrBpsCpFmPsBZbH6Ld1WoskRaaJnL3izM6JQ18ejpEbvH8h722YR7AhSh",
  "key3": "oQAkhgfcGuYFHU4pSqRMJqCYy3JFqAxmD9uV623XEWGMZvKkmgQczUVieS4ZPHboGzP9PeTLw8eW2Q3rySSh8x3",
  "key4": "5fhPygEXjkAFwWTogB6KQYbg4WAhmoVA24Dx8VchSKDRgnr9JMvL2akoZjkcS3Fo9YNx7Bs5CG9CatLTC33hNJKe",
  "key5": "5f6LCqQpyasvLN4WKGXzXTpMswuiaefhv5kyjouNvdwZqKCkDd6ofQ432tzn9aSagfwvyCE1CHN2QrqzLuHE49r5",
  "key6": "2b5vH2ZGf6SVLj8dQwv2zm1itZDTWwbfKrfLMceLyUSPmmExmdBQNWno8MsRTwmWZgXshhhnAkWLtTXhJuoVdDu7",
  "key7": "3WpF4ummYbaiyrX4vaTzHxZsnSDWKuzUa3wgtRZUtg5gEoUdNj6XEeMy3hUJb85St94vHSfqYMJevgEu92hP5ruU",
  "key8": "46s3fAF2yumofuNJ9XeWwpBM4sXjSsRzu9kmpMd33ZEHq4toG8pcsNouNWUh4omaBuU7GWBspQHUMaf5t6cWMAvw",
  "key9": "2NHyc5SBvxtA6SY7dvZKHjR4mT8Yhp9nY9rYmnCptr6xzVos3qwcBGEMrDKA8hrh5SmVd7qfUNaj2U2j3JN9ukjj",
  "key10": "5TpJ8KzHjMLnspWFXE39mJEFFbuRdRvEhPzjtSnPEss3kidKjfCta7828CB7TieAFq2K2H4As4kihT7gM7nsEeov",
  "key11": "3ms56fYofk6vQw8zJGsXeiM7aswMg6vEkx3QadmE1iyqKrUGyG6128Zg87a2sDMwD4C4aJgSoLzQEBf8Bg1cXtJJ",
  "key12": "29oZS9StczVA5hT9Ly3vawDnx7T8EmErQv364QcNBgpNmVUqsWWdtifDYkLsLebtfZgw5SWKGWWuZT9LwKNaQG5b",
  "key13": "5MPEYPkF5v17HAnRij8mh9WmTXEzvKCRcFFVkTcdiitJnanMT1PESmnUiFrmjKYv64VYpDjpJA3cQPrb5dPfPGpC",
  "key14": "3Bays8Lp9g3tWhTsqj9StLti1qZyCXH6JVJ5gTfiexDsR6UXqVeCHRDYzKMx9eT3MQiKL3Sw5wszijXdzAJuUawf",
  "key15": "462eDgXt36a3xKxGbpqPLEcUFe1WXjPVsz3nXDx94VBPukrZNfNcpvL3fnnqYLFLS52xY1As7HRJ2RZB8kVDuHWa",
  "key16": "3Zb9rU6LF9sMPsWRW8DNVnQ5wFf5xwBDPPqtUB7G3Z9FTmbp4DoZdoW7NcDh6mkNWHvxHdJX9UXErDcDKFXGsc9y",
  "key17": "4c4DGgu6gtWcGsSV6ZcXC9TQSPF44NJp2tBYyPU21G9DMhRTNSMMDBzBMMGZEuioKquhoZFptg1ujTFFwveQxkkN",
  "key18": "3ZAm26qjgCvPCKT3y8fgRJFS68b9PY7RohxSeM19gthvhUcGyD3cK5Vqy7NCNcjqspW8knK6YQDGeZcm3P1iyCgS",
  "key19": "2bRBdYp1KzLs1ArkVucriH18i9KN2d8qCT12596Zq7mGPYU18kW4qycpwQQcardHSTcRvnk5L8wMDJb2LFMss4QE",
  "key20": "51YNHcGnGiEbLUo8RUTsNNqA2yXhVoZcNnP8Lu3SoSHBA3TRBEoRQ4Qus4Zmt8YxCCZgWJCHCqcxavvq4JbH5sG8",
  "key21": "3JMzYo35brb4YVW9UxR5regdnAZXe8t95fSP81nRJkW7GmwotHwWRcQUj9hoDKuHuxxSa3X1dtyoYWsNSePEZZiH",
  "key22": "532GKproAcAwFohNoRpaQizsr6qncr61TL7L5qUogMhSNLtAGR4AxNbNk73qSEaLRamHACWZPK1yxfvbd3XoXQup",
  "key23": "2PDYv9WLB9E76Cqju8SHUuv7oZfrCzAnqiwNnxxCWeSv11jdSBHbTACtFrsEdJyDHjWkYW35xrNCe9TcQoxCkJBY",
  "key24": "4LqUVkSufi7M8mj2TyzGLTJSudVU6iMG55jV3EFgJGv6hegQGJ74QoKT2HzzBwaFjaby4BYaA4nrmUz57VZwJZaw",
  "key25": "6R7f9UZeVNRKH5AqPrJiAea9k9fRYtJo3muSjPe9zWxettaStBttD587Bek4hxpCbjYoadnXLckMjKgePub8czB",
  "key26": "5WBFkQCRZhvU6t45ehaqskXyZMt7fHpDTx2hkuQrz1XoLPcoWbfMryqRNRKQLprDA9jURqRtZdr3Jmb9Fx8b5cef",
  "key27": "YWhFC3UGUmNzqbgsMxgmj1VDgN4zRQsPGCWa5zJzhC7a4M3N41f58YbFPLuCYCCzGxoH8XCRejiamu1HcwHJp92",
  "key28": "5fhHSq8s9hG51tCRVVfuDhtZFJgVnQTzTSmzaRBdKkFYDrqomckybNKKYzMfsbjfUUNBnNd9UTEmj1ug1wDhwcF7",
  "key29": "2Ljq2DmjpykEyJJFDdW2WeApMPLcLZjojospZajjAADi2fMNfhfVU69EbSzU4ybbcKphoJbBTFAzJowEw6s8f26p",
  "key30": "2Mqa96EX8EDoeMxNKZQ3Vk1ajBKz2q7CraUGRfFQgSZrVDPzVJRhvjY9yjXMMoxn3jThRk1gNQnoReW8j6bqjMG",
  "key31": "3qo7i9jH18PcWroCRgp6CyPrC6rnDBpjiM79fSxkDAGHqtx2twuVjpSasF3Ks6xa47p8eXrbmuXSF8gZEDs83UYp",
  "key32": "52FhcAEhmyyceVvfQHZCRuXJMVSJ9Lwg9yybfD3FDb3aiHcZvM322fkUaB9fJx9KmbWxLcwKB9SmTdAvWZFjgGCh",
  "key33": "4SBQpVmbwhTvHgne3XMhUBZfaKyqRDCpBJ5yzBKmRPwRrzkc917oMbeBFADSjCSQWkxuxoaMuvLQGQRqTyVGJ1Dr",
  "key34": "qFrMzFcPXoD9DVKYpF2VbSSH8JEwBxktY7M1SDakzULAjgfgdzd7h7WeLZTbtvy2ugbQVdW5xPAejwy8TZQmYFV",
  "key35": "36aKhqFAeBZtnQykDQ1c2SaaK55okQCYUSzNMdDxwxvZDRHDgr8954Ej6vPBo449XyKn99AeNAjhcTGHXt1eWorH",
  "key36": "PbxmsKqM9MaWPmhW4zHjFG7HuU3QKq3BGd1YiHsiDWsi3PJXtfF8pJmicaGTwWsHibwGugcAJ9v8u6WjQo84JNs"
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
