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
    "3asMaMj1e72KGaNpKtUaUkmcCRX25N1gmxKGz6Rpt9ogtSLHHxTEgJNvzAGkcCi4rp2VQs8Poskz3G3jLj9rmPNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dwtKV77YWDsqnosaz7KCLnUCR9o3iqQERdY7w4xej6fEdTMDnC5rWd7qnt6QcGx2L1rnndj4STDFLheNrZART8j",
  "key1": "4Mf38wmjVKePRkHaHafZJKTsNrdSJmigKmBcSSTCmeEMdFNqGJWDamSLQDWcZt7Gijf73akuXPmmavjEkpuCmo5Q",
  "key2": "34rWD48HWxipyYEpe5n54CBNXjfLHjQBYjcXr96MdxggyE6C3vXYiDbsBBQjNY1YcvUw9H3SDbdR44S5otLaYASJ",
  "key3": "2hihTDUUpj4U3oU3biU4fafHNMbSgKxQeJeSmX9DCtVmFMQL4gLr5ZduqFMmP1Ruca3japUmK1YKvEknURKWXyE1",
  "key4": "5iZ32UyFT7mmyHthXHkRru5B2JYPNuuSm9t41T1K5XrHTdeggY7vcTm4DMpUyJV9b6EusPWq3VUgGD3ZwGHATay",
  "key5": "2cnnyn6m55TDMZTdjT3ur4FQGQz4PsmyovfQoQr2yXgy5rJJVYDYUdbstrEAZZCuAWSSwRK56XRmeVMP9t3E2fnq",
  "key6": "4JKVA4wz1Dg58mCtubRgcjH9Gq27VxqfbXHTyhMDf6x1vwzF2civLetNKMcrdPzd11yRTjQNPbPvkQf2qeXbZgHE",
  "key7": "5p7Duta4Bq4mYr1Q4xYRbEJeobagGqNiXnB3JRZcekmZj2NuedKfFTUkPdttjK2e48ZXb84AraUj8r4m562Ejt4b",
  "key8": "3LfBGd3kkZKFu5Cz3zWrvvwZ6iKEmfzBdnk5E7uBXdQ2yHNycXm1hgG4RFmwza8jsXu7vFJw2YCEgmkkeSoAHzUh",
  "key9": "4ctDypvAMjAN7trJokpYjUiJumeULpw49uJhRm8VxncZ2tYC22TgUfmpeneTvsEmXM7zTSAdAEQLKypLAf9WzzGX",
  "key10": "5umNoKwA15TBYUTJrcMyFZCFH95HL6wpqGU3j9prbTPAmrBTGi7bpNC1ec1KBh66UfXT4J1dTo4KXDNSMaAq2xTU",
  "key11": "5uWAJajmsYK6XeohmJeKSwEVRyF5LR2fe9aGkjvmvxZGWnwLTs8R33tiTRcXD4ghLUYd8mWdi12QbgCzG6XRSUdJ",
  "key12": "3nPboxnzzBNNGvnQxP5HNkifQCcMKXJ7kLjaEJswLYrtmUbM7yvreyX9E4wWi8UAvMrpKu93qWM71YGXdjPSw59R",
  "key13": "2cDQJgpevCEbWwQqDSpcs8ur5h9UPz5YWC4Ev5N2pENXJmHuNTn8xuK7pzZKZPoh8mnQ2iFqLLL8yJZs4L6HBoqe",
  "key14": "3st4gbtqZR5NUFfxRrEUqDTp8PF7jWSJF7M6zYVXLnBcd5hhF5d7DJtp3Q6NfRft9S4C3v7AHH4odQLGsRSzGC6o",
  "key15": "4mi5SXxxsCiCxr2x89rWKimHE3RsrALskrgqsULeaoPeTqAa3mYRNAzboWRCywsagYSHhL6DX7iXoQanqvJeiHFq",
  "key16": "5eWmX4SDaCi8MknpdJwgjWWLzoqEweyjhCKXZtPJbgxntd3iNT1Wx8jNYUnq5ve4qdzA4N19yAHoihH3caUY8Udd",
  "key17": "2VMBERDLuTof3B5XyRzSyoKDHYAf9siRKukHpAB6KzF7Cd1B6WCcvY6gWpp7uDvtE8CMiQmQ5gw7Z6ZeeKLrR2qR",
  "key18": "2NysFD2h7hWSYbVJMtQXX17nKKHZtyG9Xdsuve7gd4wbrTeEMkjkEYCRh8EYnyBPTmVrtegF6AuC5r4TrfCqEufs",
  "key19": "2S5jTAeMqC5f3X38dRoTjtYhcktmHTbBovCXpQYQinqeUZWkzvVTwLK77VpTasC83XRKtjChhyRk5zHJEAvBji4o",
  "key20": "2bsJw2DB7nR1bRzdmjLcbtyTF1PBj9NCcNCLQX3vo1TXwHt3F782bzEnr292XAWn2Zf6ud2SAbLVksotk7PXffGG",
  "key21": "5a9eLE3os7DXjmwAa7rJCokup2QtphKszdZoYVXaM7nHp7vgYUHTvq8ojPMeJaXHoGvqGVWZUbVwHHboRQSa3F4o",
  "key22": "2iyxxiC7eFe2ApDcsy5bqa8a3839VMgzfh47vDUDHro3iqByBBG1ZED4dLiYpfp27RqzA8WWCHraU9GRAJ72bKHB",
  "key23": "4YZZV7bm8PwgEjL5auXP8UpEtdYpsqw671aFUrezbASW1Z5VpU5g8HmpBzo9xVBFB86ztkqYXSy8ZcWg8Pphm4cP",
  "key24": "3YkDFVUKDwAsGPARSd1nu4ztbyjCvzTFWsqkh7iUr8N1KbVvse8iKBZcqy6MTW296d4j7fc7gbqznFA5wsjPTgj7",
  "key25": "2EX1MVuN3Xguvt446m5p9fc4PCAg9JKgZTZm2DWeXJEw1LHE42zJme8yWSmi8HfAF7No7HDdKUbB818HbbXnFdYb",
  "key26": "2wB3dMucJtRZzevUrCxiZsGKJF61uc4YzBnLMC9ELSTD5Cq6VM4x95K5eQFCC4KypsveYd54Fp3QuUm5QoDXPeWD",
  "key27": "31u35YkuzWYmnfVaVFrVqNvJyjUBB2DZevPhFnSijNVbCgH5dR1sKwmWpe9LM1kczUXDwEuyhACvnfSPgUGQPvtd",
  "key28": "4XXBdcMERktJsPzvWmUb49Jhkvnkin8Vr5JAzu25mYFmBxHi3boRy3rwSsbb1SbDbCRFHK2zp9QXDpFmkoE1Fe8K",
  "key29": "4oMBi8BZQgMis8byaJ72XH3bJSVySyRtPYddeRiqRKJoj1uDckMyyFpsPQmKvH7BRmF98Ae9JhhWqrPVgy47Lveg",
  "key30": "4PF9AorvbSBGo3VJh6gnwwwKZPZW6Wz3qm5VCqzL1vRHEuAzvs65bUezqS7gKmcax5V8LJCYyt2ye2Qi7JjEL3F8",
  "key31": "C3SBbTmitr9VCM91AuAkjrPbYiPc28DtUqyN83LquU3huJ9YcyQ6scsFcqEed7gL9hhspuG4HQDEHb3eKU9iLUe",
  "key32": "tLTCAEahg3BKsfxLrQYBsEVDM9Gb5ukv97hNNVaadu2NQ6YRQTwjDn9SiPWJErZfQpyg1Q4BFPasEbt8vBJNBtk",
  "key33": "3mNk9bYpNPZSNCiDFyow5onEnkHDPmrd7KhDnVsS51E1GHVDsx52xpr2fXCPEjHSLHTDtjEtGoRmoJScimXSwQ6i",
  "key34": "4rwssW3z2eNDoXVSTiAFdvHLxMQ6Tmkjf9Gh2tSLSEY3uMAdts8F3VSdjk8utFXKDMTqfKEgo9ZSQQFDsrHn7PGF",
  "key35": "2xiofRM9GU9FpBHHwBRfJDtGKnAQR4xQT76L14gB7BwLaxMxaPiwNBSYHYkNoadLsr15YAVAghZ2dgeBbA3kiUgW",
  "key36": "7SKaQenDbLvWbX8SoB3s4EyAfPn72d8qSK6oWzrY4KWZuUbALRXx5e4pZHg5Ufta918NYsbhxaxWejYG9H2pKLW",
  "key37": "4sBzNSSrDg6WZpTTSk8sYvYnJ7NPcbJJ82hkkjJqe7z2NhBUAZ1SCYuksocKLRKrXLyxmdaEBUq9TJkE4SFwsUn2",
  "key38": "33JPnFZU8tt6K288KSUQkfdFqkmmKJubbJ8HVYCP5h1Mss6KhvzYbygjngNPMJJ4ZQiqnHScLFEkG9zJnQFRzPts",
  "key39": "43QJT3F2vEUSJ9xYwknRodKEG2rJxFYkas1K6HPrDYHMyVuASgnKbTkiWGxRtz9EoCHYciuQbouhijX221rTGErV",
  "key40": "4zCSDBnq7TUxBk1XmYCmXeawKDoQCS2vN2QSQ9vUEXZ5TQQ36VxYYrEjQbbvgHgyPQmK1XDqt2vGAC51SXjmoESt",
  "key41": "3dcdRPsns7c8PF9kcjBCCWBrymd4cChwVx7EGRfw375o1517cHYuHiTitDC41pXH6ffmn3VCaEt1cw1i6g9Rfqbf",
  "key42": "38fuEMmE1zS7j3vjzkdMoUSBTQ9YBupTa5TknVmVCHc7n4KKSWuobhfMzhf82gAyuyp2BrajB8WhfAstDCzw8Y4Z",
  "key43": "taMMuxgch8haCUL7Ztb6pMMTXSBC34QKjBohwBTsfqN7DB9aHgTrtXzVWwufe2UfH7hNXLRGNLk24oPuLRgxyVZ"
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
