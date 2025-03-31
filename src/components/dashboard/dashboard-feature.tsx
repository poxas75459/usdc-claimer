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
    "23S49VER2yR4BEAMWJKa8gsdytKaJcK7AJpnF4BSLhgRpiYrysW2XUo3imiWh62n8HwuF7LMbvq1XniTZZu9JPzz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zz1PXjQsfRYBhJ766ihkAL48aBTnzdLhgaURbC68jNoRUTs1CeiX3RpBhNUuT4KbWra9yDNW9QGWoJfpfSjZAG",
  "key1": "2nZt2rgBKypXuVgTb8NvvWvBSrwMBASox7h8CRsGzivj9cNJuo1RRYzTfUccQJpMPEmHsERKND5MCSed5e2mCpT1",
  "key2": "2BGfkNKrRiHpGwfAGXL2ryTWVAQz34AoFWNfAR6YwssSBPv8zv6YHUhkhYm9w8aR3x1iESNyLNSSH2jLNb2ytfCJ",
  "key3": "3HvXQMPnkQe567iF6qYNRWPTdy7G51hh5BypZUm9yFH3TfoNkQe13t8C2hL9MGRHafs3TGWM1BVXhxd4veCN3Atk",
  "key4": "3aWAjzyTFrmdsFajyd2wR3fwAkKwuXJRLn7xPTuJNX5wA2wrVXsqTb4HSrmTobveNBPYkLjavFwu5YKYx7zeQVwz",
  "key5": "3RkzoigCnRtYac7TaMpCAksmxmkTzdctsAFfWDyFKPZS5pUydvFFHvB2soCbJQKcMdYUjs7QXGwocXAuL62o6spE",
  "key6": "m4NqcZ299mUc4JHrwZFMWve3fA4Ns9jXf7wq6D7KpJ9fyJRWQHjmrX799Uo55fMyzXCbQuNphNgssHoF52qhNYt",
  "key7": "cGSHAEskMG5aedqyZBuHSCgFNGRhGCS2G4a3jpxoHSzeMg61DL55TNm8vUfZMb3BvJJYXrLn7iVBg6TZby73kNU",
  "key8": "2aNPDxW3iHYygjmTz7XgNC1uTgRPntaeSZiSvjTPnahYcj4HAewD3rWv8B6pTM9zT76oHvyGYe6TPn2W81YriEVs",
  "key9": "mnZ9rKtDhAbP3tPG4ViaDF4UBof1MLcCCN8rDejK6AfEC57FChET16nozTniZL11QMBXETJCyTYDvFGfwEPGTx6",
  "key10": "5cZ9FKuv4eKeZNAaE9iQbUHdhpGUpCcH8AjBLofiD14VKFewMp1DPD17eS5gK3AyYeevECFrxQXM6A1pGQZVn4qq",
  "key11": "5HfTor17mUPv8noWdMZnKVgxCnrhegc9rbJ9QxhcHszTktZA5VokDoJsnQUEQUsYeBm3A5NCxbZj5GB71yWZ1XqN",
  "key12": "mABJQ2QhVKNxfbwfvcGFNpandv7TC2uddABfznccoLhC6SajKwemn5uY4936vAByrkPxoeAKhaFFnrnuCeGWuBk",
  "key13": "2Ak8q7KwrRyQNXMAVgnFwUtTnZzEeNhhQxDDvQQT8MGhzkNo9je1kwiJQYVQz5r21J7oHbiqmqG8joEcXg16fjZW",
  "key14": "2m6oH7FyJoLgko26dM94xqe8X4E9VUf6pTK98XUEccZrDQ1bgAB6GoLDZ7tP1uCcTsvG3ouNti8H3aVFUS5yhfLp",
  "key15": "5iAD7JvsMMx5WU2bFVb8qmGCZmvRHQRQBCqUUWj2fSUKW6UcqnZzTcPDVx9W4drA5nxa3TwuNgCuP33P9rEudHvT",
  "key16": "5ojgeMk6wYhs5DB7heauosGsVgca5ddV8HKhRxeMwLfw128AfKod5QxUCWGNf1zEHRvbbPBJzumqnD6yXXA4Gbkv",
  "key17": "5GjAs4nU7LcyBKMqDSEj3DqugEeJQEcx7S7s1uF8Rqy1FGW3MY2pUiswSvKJue75n1XCNRkFXPdkdsXBSjER4CN8",
  "key18": "37bEEaQynAZN3N72JwZSmAHihrYgCsXoyZhs5GHtmczB7b5GCCMVw8vxBTMLxEjPotpYVXcCJiMZWVUN9JiDqk59",
  "key19": "5vNuD2HhpjdUjWwenmR6HVHc9wHzCaNsjayYL8Ry6hG17fKqMGpzq96ZNbwFYY9r31MZKMzBLaBkCtha55wps5Za",
  "key20": "39UP2188vd2TkivXD5fczZa3KauEJf8wjqqfLXrAMK8oGgsti1j8ctkHetKptJ8L8iBuByx2FBFqizC81RNx87rK",
  "key21": "Qc5aVWcCE3napYNMNhCriKts4xEKtnEn4LcaBbx84WBvvkZs7Jb6KFLj3jWYD27R5BzeYY9EoacbN74XHhiNdTG",
  "key22": "25JfJ1nxy46Pe2J8jNJvrKqigpKzkiWoZF6yqL4pfHVLr7e4SuY7dmVQgCEpNuWsga7Y3LQFM1coauWSXuhxycYU",
  "key23": "2myme9DcsxKHe3W7bVxTg5pckTBrX2TvK4aun4y2bEy5UuqKgEL5Es2JWMyoxZt2EVxMZ57Pqgyb4nB8jaF23Sgo",
  "key24": "4VnHGAHsDBexfJuNTHadAL6KVcWh2J19viQKscDMHE7R5m6YXhSARJcsLyxTGmNKaqKTKNpEQwnDPixF7PUAhoBB",
  "key25": "5HD4NnSJKuiyAZSYg4D95qKwNMNBQbGPTbwmAz8JgCc9JKfKnfXws5yMmxcLhT7ruYbrrcp4ZoQH75irmtd75cLG",
  "key26": "HeiYK1xrCuT8vFhLW46oGBRW15PJh74t6ue1Gdmj1GFDij5gp5TahjPJ9aKYJiQemnkY2L4ixAEr39r3PL6Mg3d",
  "key27": "sZBGP7jVxKu4hjtLA2xmXsSEQtNmy1JB52aVzxqW1YwbtBYSY9hTfaaivbtBGLMbRRCvC3kYSzqftM6zB7nsR6y",
  "key28": "4eYdiRza3dnpAmSYMCaMaNgDgUgtvwh1XZgCZRv54xpa199fH95iWkqtaoLTDf9HCpJ3ahtAgkdM6bsB4vPR8Ls5",
  "key29": "4yYnUKb551nCDnKimdACrtFCDW7fihqKGaQgNTGUfBqXkKUZbKfoxofx8s14pw2DTnxVATb7YSUkiGPiwbkdCD8T",
  "key30": "5tLB6Tf6ERP8mB159E8ksKxYVQ68CoMcWX67R3sQfNh6irBPBvqiaN7QcCuwjubJu8NJmai12fYMpM7EvtbBZwEy",
  "key31": "58YSAUFDa4mAuaBLL4nEZ7Ahd5LFK5giCSzQSKduAin1DwzTXcecHiRWH8e9a6MJJqD25CWJvBAimNB9kpqcUXHF",
  "key32": "3ZvYg5WRARenKQ49HUEjh4PbJgtvnSj5Q4wfgHscTgoBiLF4zruwgQL3zAYEpTksbDqKdPQDDpp5XvZQdRpT4QuY",
  "key33": "4EC1kgxarVCmzuBdcssucRq5a1x3tdEztikrBPUtg39nhz3HSo3cwV4xc5EZSV5EECt2YT3YTgZBNVjkw9RLFjZm",
  "key34": "4FRVYZVU7LTsJJV16Fywt9WFJLiyk1FxW7UAmHxBDer3UUnSNAyvB2HRwtX8eYAnqaxeZXSFYtv1thks79zTDUtR",
  "key35": "5XE9Y8qUSrCLojVUqvAE8k5ybTTnxgbMCofacD7ubCxjZZnjfEdqYDV3B18ee1zpgPopnBNciUxP5k9CEpgqymDk",
  "key36": "5eRLjXubGbV7X2yMx8pENDBM6vSvkXN7hUELdX3Am1QUMELwBUUAnYkBJPgRXovojcBA9bQG6wbyJTTAmZNB8T6b",
  "key37": "3Fg51QUJZbFsmfuDqNjf27wL8gXsBV5ScsEJZ9b8tgBfHUD4GmseepDFMgm6MDdWxjy82ufZZKq5qutdfv5UzyVq",
  "key38": "3rPDQmo9n8GZMg4aQZd9QzPoJtD14eCrJyAUWY6DX35LV4412sQqsvH4gCoPCTp5S1ELEbTe2XdrmFG3DRc4NWr",
  "key39": "27nC3h87yYkP4BvvBiSC8Bouu89DmRH12edPZa9qc7fCri9aDoDS4W3LynN2DA6LkHS1pMAyjkRerp8zHB1EDfrz",
  "key40": "2jBZanzfJCkvXiJK5jhUgos1XUE2FZsPknU2VCHZa3mnHQxVmJdR7i5BWLwmzwr15ZGNNkWt6fdUKk7UC24nBmn9",
  "key41": "5avePa6MGSWas5ribAbP3jp1RD5YYozejJ9b2Xrowk994Hu4hUrEZJaFo9M23BWtpgbJKkscfQbxQfctu6qnD2NC",
  "key42": "5yLCvAa3YHYwFGHD6moHDFdoaeGvM7XUrr3gpQrc41iDVixiMq6SdfwB7Ca8PeFtyu9rdvphcGmcdQU542NuXcz5",
  "key43": "5TVkx25RWkowExQCWaZjWaGs4Rc8KwYTC4dNc8nkYwjyY9sAyY652ESR2kqqAA8fn6f7LSBjtbhxw63wqVTVxxno",
  "key44": "2CXRWT9oNuF5tLNE5KSzYz6yi4mbKmvApE2cgdL1TAMP1m647tHNzLVgV7Fi8JFkh6JBZNqRS1QE5NqGemZjNB4D",
  "key45": "5UcD3s3LHYMQptYi1S9ejdJLH25RGS5bdDMoBBxxNhpVw4woY17re3bfwcZb5x6D4Qhexeaps8uXoGe6Bn5Nzokr",
  "key46": "5DG645x4wXSDLMdgZb9M4zhQDLDMV2WW6bwRnTscN9aMLpsfUSyvH7ZrWXBZ3GQWfPNkYTNzSzDAM2dPsKQEH9MF"
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
