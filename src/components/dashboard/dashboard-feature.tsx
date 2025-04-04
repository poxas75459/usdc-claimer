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
    "2MRhthwJkw2nYb2TKGHDCezKzajosqD4nPczbNELMf1WPty74LvygVUyxNzkvQ1T6fNejRYA2yWTRWyyqUCgNYr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xv45rgyXdVBmAnwRmC4yStuZgWs3w1QLMz11eHMqqyNMymYonkPjvqtYneRbLAzBUHoXGGGvcstj9BJwpT9UJfe",
  "key1": "3sYkACU8sK1sVFKHaGVTcEvQwgRhREjPekA8QhuAKUnGoUcqQdGg9LtfbPThTVfPc17WGAvjMWPoF2eiWkyDtcCW",
  "key2": "3YxUbxMJ6v8UxDUdwSmbUiKZxoL2DZH7xmf4mQGYDD3MunfaxcWdceG1MXZ9Pt2hXgwuNbRjxmfmLMpeCRBHanWx",
  "key3": "21NiC1TGna3mstPGdhfKZCTVxyH6iFfXfRvmyjXMKBZG44gMTxJbh3AoH4dXzLbAqZouAhTDXxqrtg1NU36kWLRT",
  "key4": "5xfy4WuEyVT3SwyQ8GGEoA5KP67Fjn395icbHkCuZJ8me3fm3hUdaB2fAB4jwoJhG2kEYSZDebey6svFtZfCXHQM",
  "key5": "5Hnd7GFeQtP1PbJb61ivWnady35k9VARhQ39b142UFcda71bP2iHVfqf4yJYadkvkYW3S1LBFSNKp3PwXhrgzttb",
  "key6": "3VVkubafJa8n3riVxvqK1iTMb5TcptwUb7ciESnHJEBKSz4eiXLCasy7djy6VqPBnRKFWa3kgG8nCCucP5AWtcnj",
  "key7": "291KGxFYn7AGMMmLigVrmbpbPLT2iwcfzHsAApGqw91YbPZWg9B7G4iXraPrkmnxkj9B1aXJkVBVJDfvDgPX4YJr",
  "key8": "2QJddSXAEgz6RRmb4geHuABWDQx1jRkBFb8M73quy6Nk43YW7pZiB4Wjc1xFhHrrehfHjEzft4Ux2AWLDYXcciXX",
  "key9": "4EqNqj7tqt8ftLMjqijjuLpVHUNXoTRQXEvbfCZg6zKtYJBrjfjkeu3xU8NVJyJ9sx8Jeku1kshyJGSCuKQhWiNZ",
  "key10": "guF1As3isqK1pSp36nx7auaMu6VS2f8oNt9NGKivaexPZ7ePbhEWwWcEmAtQ595hnavKoStWkMDpoP3hjT1SNgy",
  "key11": "29z4iud4rQ7D5UMUCSznrBgM63uKdU3D61L8myHqCAhwWrv4AtZYqh3fsrVagsw3BaJqui1RAvS1qXrVoeVMv4DG",
  "key12": "443rBiCVnFxCyNe2pFZzP4DPbVNESveScAHc4AvVrmkU7vDurLRTZ3uaiUndDa8anMtPjariMakysb77ikQruaA4",
  "key13": "37Z4BQGkDe36n8e52rPUvFfSzpvhko9Hdxf1oEgrEqFeLiC3x147Jwru7t45CKk3sa8Grc7dpJ1KFmqkrsAjzJm4",
  "key14": "64jAhLRCQV4DWTXq7fM5b8q42y5cLi8ze748iuKqsD7FosEwfv5vPMDe3kXarBoZAgnwaw8qcqkoiyVyrBhDxcjn",
  "key15": "4ZesKuqx1F8kSZBT48Eiw5zRfLkwxPdvjdQrC6RCnDekSf8UtthcrZ22mRtu3Gr8jFSFDButC6kV7kn1jghn1S5g",
  "key16": "5KSNHmzgYSBiojLURzsj4cqvUCAqSnjWg6KKgTjs3f5VvZuxkFE8jsEZwymDaM9hQxEzsZcsK4gKfw26U2o3Liwg",
  "key17": "2ry1tczNha5kTwUzc4uajESD3Aq5waE2w1QvaXj5FKrN1fhndjMngBHxkEczSFzyuD38zyDMybNvj8zxEtpzHsiQ",
  "key18": "2wayotPeq7jk8bLjDja9a6Kabmztog8bvV72MonbGGLBL3htTQQnEdKHtDAHfDtCKpTxuYm5z9cgmWoeM22xnQat",
  "key19": "45NQZmJYSME2Ty5czMe7yLpU9ogfqsE97gigtxsYeMhfYXAcWLwrY97R6UwNRobuDbu5SWMdrWrTsP2guswuhbFi",
  "key20": "3wJLQyGrQT4htUt5aPkTYjtGqR1rrmsUUzkmdqnPbCXpqUANK4791WthGkSQzLvASEyi9u9HoXWTNPiUa5h3GFaD",
  "key21": "4UQZBpdeJaNQGcvZsrRZtFzd8XtYDHyfTHAXAC8eoKND3myE7oqfCUUD2qKfNZtPziL5668yEvNpzQ5nxiAdiKdQ",
  "key22": "iUa5sAuHpovgtRtUwwZWijKhMGpwjmWZvgkShiBDKqYdbGUSj453g9eTucic9uRLeHWQ73qF2XnzqXY1WWZtvhX",
  "key23": "usuv9KYfg5PkZHqWM4ozHEEEX1gfXdKXcXEFMEm7QFfAoGRo6rDykHJsoJSRQgduc5xUH6v6BMY9WML5EPo7VMK",
  "key24": "tTt8fdo22RostCRFu4jeqczogXTJPr5tPsWbtz9UjmRTKvt4XsbTA5XeDukLPBvKk4mTogKU3XYGnXRHNkco8ZS",
  "key25": "4izbYLCzcJE7KLc36JuxWL13j5wphSPWyRWkuqF8sHhXu5ud8fsS7kXMJHvar9QgYhLACKA3ug1GrmiCVPXcA5Bd",
  "key26": "2QTVDMSgmLgkKV2MMveoChHDoPfUdWeURp6uoRrVpVwwyTWQdb6YuP3yNmMV7Tv6FbUNV7GRCDPEftJ2nReqMCYG",
  "key27": "5X2gWF5M8TJiPWXihyKvCmvnHnFTLGDUo4wPrat28V4MmT6GjQDYq5bSM1GjK1bpzJfoA3eqF5kvvGhHzmXLv72X",
  "key28": "2AABVpsEnaYH4UnpTUY1unBiFoVFnxwca54KxfeNuAFRRK1fRRuT4z3225dERa8WuZZpr3dzo7b5cBvfRL4LGgHt",
  "key29": "EDAzpvEqWw22kDTJz3D5dfsxH5vueysh1ASPvW4UqH35bshRPMkn28sn8s1sBMNpqRoX7VoBAvY2WczSTNzbJBn",
  "key30": "2kkZ7MYsCFtqincSAfvpmeqRKVZSed8eDXy5vcGNdFPncYyuJdUSai6uC7Sa2DSNJujKkHkbdb7DkVAFVUjn1yXc",
  "key31": "2mHNb14Aq2DTw8rdQKbZcg6VKtXxw6gKz87xWWkjn2GUSfAKzRst3Wn5BrLRdkK9yGCkXsytXXdouq1NTb21fKNi",
  "key32": "2w4S35TbA9jKXGExMRQSTRRMjTueGoyVmcyVRAMp5jF3HwYubLi2AXjZFM1M5AiPQjXinCmSiZn1wG4t5WHrZMHF"
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
