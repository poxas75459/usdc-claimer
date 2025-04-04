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
    "4g85EmwHJSWttJ91MxSUdfCvz9igY8vLaZFeuQ4tModkp5JB3P4C9nLkUE7Dm5aLmqmmBA1XbRtsHNFgQj1G7zxp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mQYLutcCq6wyXknVCYZQ3BTcL9CkNYmFxgYUaTS1CXnnJEFNd5fheSYKq7HCRUdBP9EhG9pEJRh7j58pcKMto4u",
  "key1": "4F7esQ65B6WXUUtf8XQKccrEKxcGgPmTNyTDvLDkTTaheLpvvRj9HFp9GbZQM7r8UWnuELWeMRR6aUUuVSysTSX4",
  "key2": "4NcYrhTbGzXisVSbrLScSfT6v4rPVGuEJRv953vbi4HtasueYEzwkJc4n2yN5KF8RbB4wCLriCu9iLa99WzfmCAH",
  "key3": "3qqdxj6Csy8UiQMnx5r3Rg6rMp3iRxdpJqbfsHWV4b9sij5hkbLB8WggZtPpg1j9gJkUdZ661PCtj4XEoh8ugVKQ",
  "key4": "3a3r2udzzXPUXcgPCR2PpUogjPX36z1KSzauiMq5XdNBvwSFpnvBbrD7hKRBqREDF4MCK5XknLxSReEGLFpNrevf",
  "key5": "5o1AJ44cAh4HTuTKHeiVtFT5snPa8MECeAsnCcTegQTsZP4486ZevvLSZESgHXEzoKb1zKBFEMtwVZBvTAk2at3o",
  "key6": "4MHp8UxtZKdupz3J74Zb7u6XAMpNQ3aNssyWsqyc18Ka5Z8xLmMA4x1udR7vSbztWCQocwLRaByi3P6FaxygmQGo",
  "key7": "4KsZ5umXc2F1SniZPUL5YHiqtPAr6oLRJ6ftyiBiXwnhJGQ5L1hEPVVEz2ntcswhrS4Sw7sPZQUMARCWRqjYhSJW",
  "key8": "5dRBd2UmfXzoSxWey6VyMh1qyUP3Jnqj89weXeMAyzzbAxT7oWc2KUtm5qF9n2in1pMoSBeDkiUBzwEpAMjVRBhH",
  "key9": "2YPiEdpfTpzevzVcoqHJt5j5FiPA2AxYtzH2M6aPnpvBCsDLWwDJT6VZcTbFaFBCuVgE7cQrpxQqXi1kju2cUNnd",
  "key10": "33BHXvDNZk1hnrm9gUSrJ2GbvPwFRi7EzAbsisLxYmVGSbWLcvibyYHgwVGxkpMiLGcNkSWnqjbD8FRax5HC5hXm",
  "key11": "3okkH2pwUbNfy1G1BB2rWY6NpdsJpDjvntTxFEzAivny25KBhZBRSU9uL8y7sFeSJndCnPr94fLdEKiN1GCAeHC8",
  "key12": "59PW7ECfdsdMa1iykeQyT1boHDkF3XRuhfef28qkBdbnrdLzFDErUV7xzmokDZyqrT9aibjoZWftWwgNs6bk4ZdF",
  "key13": "2hZ6JRXpvbqwnXeEwRe2GksNaHFnpeCpEhbiPXG7BEFj6Sf6wxgFjG9AqRMM1wWN4Tw3cGVw4ubecNCPBmJfeRr5",
  "key14": "5gsG8f9RC2YNcA6Kz34KMy7VSw9hk3T7yz9ieqKp99APBGfEKoQDUTmTYdg9GybQq45w9mpqJWSELWPx9UVTspBh",
  "key15": "4n4rUizHYn2ashMyh6P4QQhkUfAz77jSyWBioRmex34etSc5jSotk8ezZFbZ5GzuGZwMYFp5Fg8wzHfi8GwPe9Vk",
  "key16": "5GzrPn4RXvDLLrsApeauVSJ55xh87K33Mx3nrL7UHepmyQ5ZBjPJjPMHvfst4BXsXhPwKzQ1jqDi1iz5JwQVPAsp",
  "key17": "4NvxS71SZw8ae74SfgYcTwZaAPquNigJocdiS1w7jmmeqHBaNd6GtXf6nHbyq6s2K8iiDs85j3NUDbH1a3bZPxWq",
  "key18": "4CAG8ESa9YzWmXWJ6hjRW2wKo3TpZGEvrf33mGyfbLnMb8LriE6KKyNSQbZscykAVX81YzBB7xVf2TU5c196DthN",
  "key19": "3DKotPsPCrZ3pZKzCWQLfq3QybRegRJDDo7ydVd2CWrRT6BGkSEV6pfeFQ8ySfXwCc8ZVMeYTkZq8MUrLu5QNCMh",
  "key20": "3cUD2eyb9d9xkt7jK5G1RX6h2LqAbvUfBAL9pi8zZau1iLFRUR7GnzzETgeSzvWtqzC4NaVvcJQpe88uQR2vQWMD",
  "key21": "1WxXi9ESGNMio6REHqZoaVHoi2F5yVnQ7bfBDibUMQ75KR2D7KvcxozD7BirmBN8k4hDBGAoYRQ8zj8gJ4Ab1iY",
  "key22": "2bncSKbZAHACP4peQTWCUv5zhTHEcRzwfp1L4rn4atm9kV7pXPqcnmBsMHzeCAekxZhgJhoL3XGTY3iA3MvSuktS",
  "key23": "3wUtkcQhjFpstwkW3XbrzArcKpYy2bd2TAweKq2kgrWkf3v43EFZP6UomzBcvBPTbPszjWnPZdeqCPWP1RzmYXJg",
  "key24": "67j5NFo42yGTrKUyZQasUqMvKZjLa44Jz5VfjL4vZ14mRkeYQ357nWpEvhsivsNUPTLdFmrFPmFoRDV12s65aKdn",
  "key25": "V1k71ejQd88NsA5PmTUPomiFTi6YfLdVpB8GW18WhJmvPPf6iVqcUw6c9WExYk6re9cscHdgSjKHTSReMVw5TY6",
  "key26": "28CwPad2vaTRyWSgSR4C6qKcCWKpbaw7PH2Ja98nKTVf7wQ319QkVgiBPFkK8oRC4951zkZca2ShRG1sTJ73p6SG",
  "key27": "5xDEMAy22Wgyb56rQX2z63AyN4jnx33cqUr1571mprq1WH82jNwN85jB5nUGMXBSm127QKzvVBeAn9dQ8Twpe9pb",
  "key28": "5mHf6w3G8CQEvxUBCMUxh38DNTuG8fAEfkPwn7rsQiZ4PJywhbGxhyUW6tAs17fVtqSpo6Gdfx6s8UfiRkW3gUKe",
  "key29": "49HCn1E1SFRHrzfT4FyxYvXwhJoEQFCEYzouuoS1MZ131Y7sLLWhBATV2wcb2qFjrPJdhZnkhRYPhx74Vg8C97DA",
  "key30": "5bDu2fwp9JVqPu3NLM5E6TcMZmmJaKag6NQnNu6C32HthWg69hJPDDUaPw8UED1x3ekYUwrUj9CzEuquhLaMjP5u",
  "key31": "2JP5x8H4fqDHSbXc6rjX5tACd7R8LLvjoUJMofggz5ofuYdVjQrRahfsjqskSLYY9v9PoEQNYyvLWJQwMtydUyow",
  "key32": "4XExuMGnPJy1UVN8y9yKJW9Kop8ob3ACnd3HTphc3MWetqYCLaP2geUjXvEcZksUFSx2UXu5P92uzxo7GS1ccoDs",
  "key33": "5hj5nagdcYd8KCeecik9XGvKLww1KyhZDEQ6SptqUmzXcFAikFgmSNvB1hNFMwELGAFq7iB4LDYPhGkbN4pcAy2k",
  "key34": "FCuHdhz3v2SYVt9tzeqd8sxRCUE3vcQYbgLaziN6wsCcQUuaMtvm5ZBDaQPkAhRzmuhvFF2HS5g9tPB1e2RKrTR",
  "key35": "5VccESpFFog2REcWD8Rj9t4H6wmm4Te2E5g1ahj8fBndUjWDyshsyRkBw91uZipwjCae2EFAWCiye5rwhZU545xT",
  "key36": "vB1mBDeP2ujaauDtYZGhfFPvBhDVANRorw7TyqRj72pm43ChiD6PUeh839mxhE9MJWMHwiSsNpDHvCBsicWgw1u"
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
