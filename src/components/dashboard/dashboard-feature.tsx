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
    "5QtRKZsjuMurC51rCr6Y44uur5ZfjmNDb9fGKCj1qrPxWbsMeeFiwjgafWk7KbLEc7XapivHW3Sj5fTxKMLAfHRG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zmEy7rBNGsSjLJcrAH3bfSJxujo3GMrbKnCrixryozHqi3s7SFniDyf9vas9L6Cds1DrRHAV6uxRqS5jQ89kuen",
  "key1": "45VR3FBZEngNiuTWZaRzUdqbLBpnSsgVwDmbcMDBKu1F868vVYVfNxg4ygBpysRVwBpakk4FwruNMzXPQbboFWcC",
  "key2": "4k2jCyMY3bV62AficgsPNtPG1oL1gVzebVkx1jd2r64oiAZPtKC1vnGQ4t5FdBSbJXAa1MyW5C3gW8NBczCWNrr1",
  "key3": "41mDaSeVmzA2b9EPEEJouzyZYkDhqVteMdHcRtp5YzTMdq5fzYaishzFhqdJtarKyhiJxLYjZZBjgkCFocKsoT3G",
  "key4": "5uLQMkqDA5y86ugWSqnzLhN3rjzwjmY8KowhbgTxf49jiTetAqjkcLi2QhfN1ggyihLnJqBcXGg3RFZt53Tintkc",
  "key5": "56PkWR7cKoW5aRU2Q4McjAs6M2rQvSnaGAhjV3TJwSdmWw4wm6EQbN9t524yJ9iDej2ayEwqd2gRW5UrXoDdWXuJ",
  "key6": "Eu1onmfBZUZ5RsTBUYgD8QyjDdnoLNNE8gP9a2QLgtg3bqkGg3hU5sj4LTHWKvmGjUXtvpEjuzXgTbmPWVe2KbQ",
  "key7": "2nD8Qh968oGM9YFWhS8mNSYVeeK1cbiVYmxLRtVymghN5EbguQKnN1JQg2zbdZxGhRr9USgU9S1zij5kL6jDypC6",
  "key8": "2tTDbDjpWib9KLdAssgis6k2A6EpiFdUGnbwrJ76rdXhNzNPKWTqjj64RVoBvuCafwH5jB6Pkji71bHRcBi4RQgk",
  "key9": "XzKHUqbD8R8PMuBeTBT8L6fBkxN1JiojZiMPKtfrYoExzMk7MJhBasJwkkAgL2WFWgAypiQgYtmWLgYyJgbFRMH",
  "key10": "BvKnfzbpY4jDEsCn3gbetmkYGMxWTVRgTeesHDUzt37ECvBivXxeduWixcNZoTCM3kSSixQD7BJu9XXTozZmyEY",
  "key11": "36n2GmJdVA8EUzjGVZBPTFKRTwVt3mQGQJFPsEVX6zpJhrT5MMLFnDSKx3C6WZ3gfKunjeVyjzqUuyPL3PSpoCHt",
  "key12": "3X3Zo6KRkdoYHthSMFnz5kSbthM2VDjkvZRAUJvDdLwFabkfWwfjK5aMNjpVdJCS1Rzeu8xWTm1duWJxyExdg1sy",
  "key13": "2kvfZiNTJ9jqQdVb4hBH8hNawK5jAdYi5H3hSSCnjX19DAWKfnHw7k988i5Xf4ExpENu9VPp87gsRaeca4bJti46",
  "key14": "2ptUXkvrgXi6WAVUVMyCdtxvc4rrMwcKZH3vAAjXHFGJxeeFyqut96LttuFFiEbNXnSWib6kc8ayJZiJLo4nDRee",
  "key15": "2jnnj8wUuwvPR4noQznS7yguvzJgvUU9HLa6DShyeg1fXVx4xG7nmymb3zruZkLb94zA7cF5ia9qsp4buXYGZKZm",
  "key16": "4GJb4XyeeSe19WBF3QtQyy6iYqPGipDvkeExrrqXfSDVikG1eJDYeTZ6Qz7aCqP2QxGd2gMQS4hnwUD2n2nxh4ag",
  "key17": "4JnWiXGh6kZpRfdhtj5ax8s1aeYN1iY4fESVX48FLtmCv91kRaHLhWEgRFuy9ocWFQrE5P95svGrE2RUo6x4v6aJ",
  "key18": "4MsqpCV2gC8JodMJAUFZHykurX85PZ81BawCygz3uXATytX8MJD3oBL37jRZNLEhVANwJgNbyu53smBNR8EuS3Ft",
  "key19": "gVFQyybQSyRoPk6RN3Py8aTJc9LCVdFDzREkKQHva3LJdbQjwDYioCrXpvyLa1ANZBkTPeeC4rAXVXk3vMVxSoY",
  "key20": "35M95ZZTKic27uFTJCccmdHG2jnM2fmWuJCFyn6XSRz7WEoyM79tzBTZMeTJGgxM8KMMDFNF9ARq9XpnzygmgCGN",
  "key21": "y5gYUcgG5R5Dzfwp78ZPdwro8keJwqgAfAaBw71eN7bKQ1917UD2Z8ff7gqcdeWFsFqw4qM2nP2YmT6xRtFN98g",
  "key22": "5DtQ7RDTTE4Y9qQX5W54bejjcTnX5GUvH9aonX6zcQ6L21gELRbB2dun6nX4aCiaGWHhx576Gp22SukV7KGEwGtM",
  "key23": "2dzTry8xBLyduJM76KstaZkiJyUHamGfA2hytqtpbCi339cHiN4qjb2KDgxsZvHHRMuwNWH5XBm4zJsf4R3Aprfd",
  "key24": "CnqRVPv6pjaFmUnc59oUQ1w3YpK94qGJhiBRVMtWj5uqE1D6gHie7rhCM8arb521SCtxcUQi31yBGGCEhncEGK4",
  "key25": "36NbmQhUhd4YjSCCnsk2TZCZsnNDLhG55db9GK1Zuxkr8fNL8BoYRqjuu1WXdeRCfeN9scdPEKUZaox7DfhQoAQ4",
  "key26": "p6kwVNynT3rdQk8Adyfcr69uM4kGU7Ca5Zt8W6XW3zHwewF8qQB4Zc7nMQqTkdAmnuuotono77L6EVZ1N9nsm1k",
  "key27": "26LyhsUjNvgo6pgr3Ty77rRHjCgLHtXUWqFzHCZ1yHQasWHxMm8Fr3oz6oS5ubPibhbQJwahjZdtp5DSXxATt5CV",
  "key28": "2Mga8u2eLCgsptDxMzt6oFAUhS71xEKtCVCX59a5u9XbnUjQDzfr3Wrop7onLbe4K45whmfqRq5BHKthLvgs2Y8b",
  "key29": "4gB2kFPq5ucGM1xp48doZ1HwkhmAmBMKnTkYcTRJVQ2rrS8cLoSLPMsfSRtjY9TeEmoqGvD1aHykgJkXK4EZD2Ms",
  "key30": "z8jGNkn6V1V6r43BtjVF3G2ee57Cs4SuWc9jzEudNyjJ9cCU9iXb7fjrkMJgUk4VfBQ1YmYQTL9htck2CQzuema",
  "key31": "4y5eGSZpsC4HkfvpMfW5hSqaA39ozRXFEw5rG4A6Ne6t6TYWrsH6n81xyKuKTDwmZLHBMvxeEaBBjcmoB5N2hUfj",
  "key32": "5eoH6DKQ9QWUZX5sUoPmq6cpn8GKgunQK1Z8GMGH9nCRxqxeLHaToAXBZbnApmCARjRCnVgNUboZaNnoopkbrWPy",
  "key33": "4BAKGiRHE5rrxgi16K8ezhhgHEzeAzE2fmKKdRBZQoEVdNNehom8UP7XXDAwZpJ6urFWazKFgD8u6dBrKwQGMWK1"
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
