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
    "8bwrQLyWuWDLxv1959wEMKPpmLJrsCsA1Tvo8jXZ2uTqUWN48QKq8YstfcwVBEa8csCtstnZzT3V99YPkJo6YWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZjLLCVqESTeWVQTpnNS7T9xksCvfdgpcVJpWWocWXpUHZZA5H69zWmVN63emZEy987T8AwFQPsjWeu1RoBWwxC6",
  "key1": "4PUSncSwmvws2pf4f8dg2yUzVNN4XoSF7grP4yXxxsKWM2tP1tJasNDggExdRSmW3ReSkcVN5WQ9Ujq7ZKHduBw7",
  "key2": "4i8SN142Aoapft5WUtfMndzFouPeYrp7SBBGxF9crwwpw9hwk26Q8ob7HvcuUDagSrAyFNYWtgCGDgL3y1p1NxGP",
  "key3": "5BgtDyWYanop4C9uuJzPqytYqnE6ZtTaff1JPqffWMjzjmZYF7pvZKkfUmiSdvjzPKHh8P9qGNPNHdnV4iCMikPm",
  "key4": "41jU6uzavCEfCPCvsxdG2oXWRToPR9G9QvKb9dCGW8pfA4HZyDiGEM2ABFLYDoKqqEp4jTn6MemrRKKeDzLisNhD",
  "key5": "2FHzsEgYhoZveLM3iWz18Jrxcy9TwZtqgsf8D7MDbuPgWVs1k21oReTQhtxzPXS1mjf5MBA8ihrk3pjLdVzd56Wn",
  "key6": "3bWxEtaGMBpvszoAoG3CN4pYeYNxc2no3mXmE6nXUzCQVyEgzwRtxojKH7UcUKCN2XVibPrGAPax9Bm2d6KxM2pz",
  "key7": "3otWCCUotL6MDzQF6uiKo99c5qfEKhh7ewtipjggNkvJ94KvgwDfMqQxCa7DmR858rBQpCtbqyvzmpiJNrxF8Znw",
  "key8": "32oT27AN2pEraXekpan4fx2KLmsT6foYtAqr7ZjYieadd35m7Roc49vuXqxrWm1bEC7MoFYihcZZB4DE2iDKqQwL",
  "key9": "2gFuhF4bEPECkQhvjiQnXGFUmiNFr49HtrW9cX3EoYxqFAuzndWs4zgjU77joqqyNe7ffpHhYjg7jSGfZfRAa3DH",
  "key10": "3THmQegP8EStjRYYCYJQmZee5ZcTE5s9FwVLzFFR8LSsjFCrTehdHDHJ342RPFmHGjp1u1KbBYr34aHfAwvu8nB2",
  "key11": "wQzbV2p6dCeyci431VyLxNvdV3ZVHr7cQ9i7XXG9jvkWn48mmVEoNhVygM19Zdz4N1LDcafRTsWhrXMrXWQGqCX",
  "key12": "5SNoXQeQiR7Tnis4BKuLy95RnHkfu889DM54jyPUY1QhxJtpDuxDwxifaBJv42Z3BZBUmmHXXcKAUv4FHyeaFH7V",
  "key13": "2T31A7EyYAwsTVyTUtxYCdgE5QWzsge26yKPFC6BR5v4ZVu8tivrwDR2n3by93bf4RaXHN2gYRg4GTQGnwdJc85",
  "key14": "29LhJUsLbSkhtEhPwHog5zn1JcohXYYiBb5CNvRyXDt483AeZEH7CLCpR34GpSmwzBiMDirrZnXK1YY5kLAvT8mU",
  "key15": "2ESJYVywicBxEkivKUS2kpJgEjqDC7akVyx5oEuznBUEdsdc6BXhAyVokqkcBGxWV518Y68jaPcS7XewQTeCXtYp",
  "key16": "4essnCg5hz1ZcEmfk9Yhc95s2GEXQT7caVZcMqR7ZpT6dA47Uz1VTVYbaVa4qFBZajVJBMagRim2vocXRrLRq2Lb",
  "key17": "2vez72VXoUFuQCRru3oKUzFu86fxvYLNkvsknobERExgVezZuxbCGVkgX1CFCyQWyJNySjBJSLUM6vTsjnJz8BBW",
  "key18": "4h3o2Pe4JjGTV8BJ7doLiLHKmXdy3Ya5zA1enrTj9kk9qsDe1GmEfQQBf9of424N7FjCCTZuUWrNFV5N2nX2XG4y",
  "key19": "5zfj5W4U8TgZNSG6RSe8uveXDnkDL9XhaLa8RyXdzs4RyvzomQZyc7Kc8pJifGa7dCqDZkBkF7EMi7kHYg2UE5L3",
  "key20": "5g87uahcVswWSi2bVq4Tr5F7XVnfsmxfZZxKescuWDPzLrSpfhictLupnwDyH6pNEQzxw7MXEuP81JMSy9ZQayqe",
  "key21": "53GavqgctVTdJx4rz1chifhXkUViB3i7MCV2txQyeMzeS7ZcTGsdKhgFB4sC6i2ouWv8ULK3GV2WQmuxZPnQRzKq",
  "key22": "5rFi6hyN1wDdev5dabcEnHaMkNpbEGWW2n5RSNWwcYBiVh39VWnQmERR42JEco4x38Mx85YtSWG3DC12Peq917eH",
  "key23": "5qmZnsRACGxK9wERUtv864Gw7xfX6VdK9iDKssEwt1Kk5XgCyaPXCpq2ZPTdEBvogVxqYGoTV8o3nmErNegtWA8e",
  "key24": "VtrznqPuwhkzucvS46xpr5KCKLuXHFzVfg9nvRqveosnW3aiPBvmQ2mqb4cBzZdiVqc14SfjzcAdYCgH5SaoQPN",
  "key25": "5KoYU1mwcZHNstGMEbaen755aE5kHqPQrxS7k9DmC9pAuDaTz86RbiDBzQohePMgTvQ5qdStzA4XHJuKLXxfEQyH",
  "key26": "3CRNwtDwjRUQxk1vmtMtePt9fHh3zxYDTXB1gTwFoyYSQG3tod1zvZiX2anSDXRjnPWWsySCuTQSCzrv9oyAf5MP",
  "key27": "38FEKUBSWmC3bPuX16UG2tH1S24jQLvaNorFG7rFEcFhU5eMg5Lj2XSKmBpGfYYJCrfXCAK8dkPcNXedJ2pEb6dJ",
  "key28": "63zWYXqR8zaeoz3FuPZG8m57Xwaw6EnRDiiCmrRVoKHW5XmdT7qvsyp37HHVN6R1bjkPXHw7KiPt9K1xV8Bj2Wja",
  "key29": "5K77xA9DAi8w6Gcv8DDzeCsS3S9jT9geefvPkbpoeeLCp1uwSvDLUJvaAymsJU9pwDgdk4tNG83KhSEdqz9gESB2",
  "key30": "3PxF4MXHvFAV32TqowjQYap3hC1tS7gwBXdB4SW1WrWJ5YPBRMYz3wuFqJQqWmGnJh6eP4GwUADpkzCVsEkgRBX6"
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
