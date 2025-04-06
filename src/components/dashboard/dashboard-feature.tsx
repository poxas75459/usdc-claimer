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
    "44FwwNkMxMJzoW3ubE566Jn87Jcvi8RmsVEa2pHSMCGx4o8foVi7xUjJHdyQyZpScVie5qy87AeadpVxQv1xbLGC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uJA8pJTwGQufxre4TTu3tQ7QpKD22AbLXU2M1BWUDHKikDhLqWjM4REibqo8Ka3BueRvikEdh2y5rdKgFk7wQzg",
  "key1": "2UX7LRKSeVocu2gsL9xRN1WJCdeGbLX2FGF1ZGWGymRSCDCdcv7XJKcjxEWwhLgHdvpsjm5GtUFN7PT5r4XiNgDf",
  "key2": "4fDDbpqNAK2RdSGQrH62e8jffkA4fxRNqg6ivdaKey7nn15C9MKW2vwbKLkyV9yUmR9oFgVUDH1t1uLzMsZu9kpH",
  "key3": "4HwFhfZzoEJVNEkJ4hDCFgF265THu9Gf3hGjchvH6rULmDRWHTt1dLNt3QGtR2sHo74vTVg5pU8ERTMpdjc3oBcT",
  "key4": "36Ms7gWN9nTiB9Ug5FoiNGcemvY9kVkQwHUxkQYsa7SEGNxWPrhTKXKZnKaDh9uq45yNFSCV8B3wGcq7KhgqUe9V",
  "key5": "3h7pH5QKg4xjzEJd5w2y9zbpbmhpDzK1Z3a6HpXYDMYds48ZwdFUNYinbKkKmQxxh2aMTUJ6WgPzF47LfrGYquiW",
  "key6": "4u3cQNrKZY3VMUabTUXba66sbnxNHvsJFZcfxx3PWe8rBBniSp74bEJMuCSQRFWGoBwqayVHqLF5bTr8uzLoirTc",
  "key7": "4oBU6DiBpTwG59eUn6c5GxfKuEMrKYb23z4DyVt3YDGpR94Zp6WXKP8Rfw4qEykBpQhH2s5vwmVt6VKn2kAsVmgi",
  "key8": "2vMgmpUZ9tkrEnJmDvJtw7J4bPZrCPBouLBJ5xxsY9RrtQxPYFmhZzY8nmwznChhY9c8WsWq1vxvsNKshhTs2uuf",
  "key9": "5RdHhP7TznH8SYeHp114hKWkkG7yFEDg6Au7qLxe8uMyAYFtH1h4gA4DdLvhgKMToDnASPXpcqNV7J4z13qVakZq",
  "key10": "3Vj1ZRxJ89nrXSPCxpbFCY4oW4R8oaXP6u3NRmgaNCCu8D6r2H21GAaoWYuk64SUiD2pdQk76LavLw8MYjbyVoVZ",
  "key11": "5HYWuFTequzHPDiQQpFnM3pN1kHJUYqs7Q8XXdWkS6JQNbepZLCj5gjQuVG7HyqBw5a3m4WtBAem71hg1vjGHG1W",
  "key12": "2Bu7t6X1PRrtKnGvLqDpVGgdShVPWxDqsN1H9Qqy2uee4JJCgAqrfsfc9vXvAV9jroNw7fiw6xiexfgPRtfREMfV",
  "key13": "5CFew1bNpx1iEWBQMX3HvdtLueDuQ23DmQLiW6iv4QFyCS8L78dYXESmaXFSkpok7xatCYB3ex13yjyMzDNKua82",
  "key14": "ymoTxrVpx6JRCz5uB1F5r7KSA9Xugi8YNLECRzDJWByGN8HMPH3uXUfCqLUcsfE18bdhAaW21p9f12whiHLzyfd",
  "key15": "25wSxvFhqCFy8hs4joKjqAvhLcDXAGqXJeyyGbg1rZvAy4UkatDW4FMRwjEizZLdhUbPtFR1jzog7vqGur2vNk2F",
  "key16": "2QcsHR2LRx7YcjJuKBHjdmuAxpMpPBdtBYZtZogDs4sGTAQbT6acFcVTyW9xSVipytpvbGuuJprzVLWAoU7oPuL4",
  "key17": "56eizULLDN2o7TNVCAZUpZwKJnP7nFSSxURfdBvb1zrf44qpvExpBbuL7w4eQepUyAbLvrTh9rCmrBdzgEzS8Gcq",
  "key18": "t5EofDEqrp2Hpxody29m1wffoJhgvnB6aF91DDJZkWZ4sByMR3ojM7AnsaxZCts66KnYrShyG13vtvBsLBFNZbp",
  "key19": "5GGc1SeFKBjsKEjW7iU9AowHftYdAoDiJCPKQC2Zfw1Dng5ovG9t1L6pGbFsstf3dB28cEUgtr3i6KPtKTFXiju7",
  "key20": "5uTuezGkXGqBGzSrAMuEH9UHdDvMWgZdivRj6CoX4Ws58tbKkKjp4A3LtiFie7Bi4jLtwsPUHCfeG28wAxjzuAbC",
  "key21": "v5H9CWxMGbPw7JPinzBQ9MpjBeBQfdCP6aBfeYJTEedZEhK8xPZVTrENAug5GNYFuRLJfExruPfC2eZuBCYj8dr",
  "key22": "2Krv4kSjbs4cEF6DLEdZAFqLpbM8eGNshA89cJ7Z29bSryE7KvzGG9E1uZ2nXJEc5XmNMyjHogiRJKzdLqExJ54Y",
  "key23": "68SwoHYoj11F37KzC9K2hMSMycyAsimPBvmGrqUuQxTPEefbWPY2sTjq9vsUMwM7mdkduSGKoBCH9hJw5KTkoFB",
  "key24": "fR3Rkinhu3Ksy1Te4EdY5h8hUfkAcAB8i8RCSxTuhAcofUzgzwYtsf2oxqvaiDjUwMiYLMjEHoXpWLiotu6WZkT",
  "key25": "9X3MrN9PWM38bFv8FF6QSmgtKB8PfLqq59heeiwbVQYYYd8CXpZLLCr7d7KGZQJ4SWZqJpMAQkVy2M9orHf6MiK",
  "key26": "2hKVcbNMVabxvuN75NNErTVs2LQGZtEYRi8DPLsoLZCt5kmCu1xESEAe9PnPpoMogvWy96k147SD4gWZMTCsu8gS",
  "key27": "sKSQh4MZngUgtvFdHmy6e7PTAfzyYKyxxJdW7cXk6xQzgrCaFeAmNVyKtBvu6ibxZX9ztQzLPxyuUXBaCUzK3sr",
  "key28": "x2JPaerFWAh5JiTmEa9SbH94Lnyx4gB4tBkoYe6omD5rXsCfKZvqcZJScbE55CvhenupK5WNSKGiesmH4k4Wt1e",
  "key29": "3xF3fkxsfytGegb4bGNkRiYsFMueZPFadnneUq9QqvqqSouxMb37GEeZkmRUjeJbanDJafYovFLzKfuYo8ZHCed7",
  "key30": "4cJtcJNBn8CN3XsuEux7JgmWts7My3vXjR6tXAqeFBEn84LX67UsBtuQqeYdzSH1fSBda3A1PFTy9KtJrhgjGS2A",
  "key31": "25yeiYYgZ1x32WvuHC9gzDMaYchZJskZzLrsiEMvAMTeWVrneoz1qYafr3BdyNFpBbU11Rv87vu4c8D4fYkeYD5z",
  "key32": "4WwjBRdTJ43gQZepbR3b394BvxaVwvph4vwVNfZ5TDwJjr2Ecoh7wbCUfba1w65cGqECiZmW4nWMJzKgrxJDMyZQ",
  "key33": "5ZKETpHiXkPEwuC1vzbxE9y2rGsNM7uGLhej3x3BXqenyaMjm2G3ePQQTrPVUa4ntLtpM5DxyVHVEEQ2eCsnEZic",
  "key34": "5SLfv6RYveFjyeqFRBFZM1j6cqpjkuWiotG8FC6iUaHU2mbXjbnY8123w2aK8GtAhHvVTGhrA7KuMULkRYJST3vr",
  "key35": "3PQJcfAVGvGb9KCKXUvAp1JBdqzhUok4vznPSherNKkX6vou5yV6Z4fc4cqSmYbrWdscAgdgXt4zmGWFmNfx7wim"
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
