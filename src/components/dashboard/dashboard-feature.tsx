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
    "3iiw6TfoifLph1CE3zVpVjxAZkX12MXZrZaMpn8MYULaPUk88ZeZv6oVt3RBVfBTvFgsvLyWtVjNjijJcFGLQDDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CxBRuDJsEsVAejyFjtfiDTPHk66MXLsj1jXMvRpJXzStRtJyuwsiFU2gxbtyQ9Q1WM87dSgLFtSkfySgKhDH1SC",
  "key1": "4cPtcrJQFP6FK2tWNLJ6XtUSHCFAWHUHpKuRT5BJ4STvZnHtKvKkYJoMcSkFFowUwhPZMm86rjpHmYyvzut9hPEd",
  "key2": "3dbfu33DH1iMFEZqRS6aXEzmhes8x6nrv4QBkBJzwNWzHTEhNjm9zjvZdFbo5zbkZB12TqSeKYr6NwTyrcqaY9UE",
  "key3": "2wjRQXrLdHBCa9c2FtBFVQHDn5yvPwDheQyjZgTRcySLs9SZEHpW1hb74L3KFDRxtL9McQABW91XorRCs1wsHnYY",
  "key4": "5Gaah6X75ptnSGb44zXXS2gjumtmPt1ZNhugWSQ4LqG67uohhEFh1sJHfDBf5Lo67YnCLRu8YTEFYwxZbvYjKuvx",
  "key5": "2A5x3cz46igANes6gFdYgfo3tG4PXpTXyXhWoPwKtddQWB6c2p2MaX9XwmFrMzSSz4rPPEh7VqK9PWuSyz8tVFGo",
  "key6": "5HPokjEVoweoCbU8SHUwWRFj4zWuia9HzUiGstkpAxnRNzJtuPFyjuKs6KygtWvtbfqyAxg6jWEPGWSB6XKfv9qX",
  "key7": "4QD6ZrGYkvd6jegFCordtWomQjpRTXM14ChKF1w79dLpRZGhzdB4wk3o5BJ2a1zFMZS5HJA5gks4o1sztqnucheD",
  "key8": "3eGkWWAFSQgHycaAUEaJVomY2TTuthPqBkhn859qkTExyUj28DHKFxPQBi9UJEajwdpZa2N76ykme1VvNNbn19aD",
  "key9": "2SmscK4JZaUNngbfcrjmQBcjZ5zLA4LwLwXCvjiEgDN3kNnxCCa8RFfpBFKbiki5A8e21rpiJGNna5oSZ9TZR1DA",
  "key10": "4MUyqPToVpkSAXSVPPki9CnBM126Z36nuCRoKKkx8rCEPsiKuogGc6ytUKU3G6eV3a7oX41zVXBUmZMKCXonda4Z",
  "key11": "59ybRRcJdy2qckQce7E43FnHP2mv76Q7JUgnmdbQfewxnzamMRc1mMDySR4Hqdem26tzJ5iUBp2NemzSHHt82vDc",
  "key12": "vAxHdCusGkaCfNAJavsbZXTrgV3BBS4ysY6KvpxFuikiD6fd6pkZGxteCtCAQjvSXfPNkqgJ35c63xCjRMkJrg4",
  "key13": "4ekazTwdTpJbkdXn12n7st1GgGRYs4WgMAE7H8wMe326zK8ZHV6j6EoSCxZNePn7Jpbddni9Vyaa3xPmgVZdLpCD",
  "key14": "n5jwxiREr2cXN1by54FozWdXBjHXpewtmX5BKcZ8PNQJZcewitGUkggaU9cGRferghhvrVsenmocnUMeN1JJdvf",
  "key15": "Uonc5aQg1EmgsoSiVHkMZZrdrwLkS4fn4Met3HnEYk8u4ypncUxuu49hYS6Dc3gFXsnYof8WMmFX9YEb6ESWxB6",
  "key16": "EzEEFCMDgJyQUGzYV2qYMKsAMMmBy2nRx2AxdVtpxD5Ma5SwinPWdgqqdzDE8akokP18qKD1u6cvqn8Ynr7oFGZ",
  "key17": "aSn8A38FNhwXsHV1MDG7xTx5UmqeJgkSF1VgiJDzcTGkuMGprroaYcQWtQ6x6k1omDsjDwet4BTE5Mtp2SHrYt6",
  "key18": "53FuZ9qWRbo4oz6e7kaRBrLMKb11K3fwKG5Z1PdBj7sddqgxAa5p1NobKXGXQ5yd9cm1AdMR7xQydMRQkqArLMTs",
  "key19": "zrVp4yDouLEoGfYMDxa3FjmBpoo2MAoUTUUddpiwsL5ZKaAgv8WxZ2JcDUa9ARLiaD57mM8ArPwg6kG5dF22T82",
  "key20": "5JwwTCXQPNujAm5KZeXCeA6CiKh1FFsMKTJp2E4mSuau5Mv9j2rXkUjX7riptLhPjHtbfdEZYEjZtdvvyfD3BAyt",
  "key21": "2Zar7tTLbt4RerPcJqTWHqM1ZSCufkJyTWYkMRMz7AN2tpJBuX7keonDABNdEW3MZYMWSmkT25nJ6Uca3nkCJ4NU",
  "key22": "577cQTT1hNVveqRLvYzfphid7FWfmmyG9kSPEAVchaex5JXgFSZdnVYatSgn5zWUdfbprsDhaLXRUMkd9kRzUXsL",
  "key23": "3rDxmAtCRuGU6c7wCk4BG42TpoqkEKDEAbWd7wf2J2Q7VGdJrLvymXSfd1KZWmkP3NFYBK4782uzxBdGkAaj9827",
  "key24": "qb1axHvnG57HqY5aHqTSwnkN4opmNKVnN5F5hp1rB4gHPvzRNjnNwJZ9JLqs4Fq5LLzADfwLvpJAcSAwShxUgyn",
  "key25": "2jgS1A6QgNKFkWMqRJBvwnboZB7zJ3KnGrZMYxtt2rwznPTw63HvYHbo45k7NWVYxEkGUqHpC4pLBntbbBb5jR5y",
  "key26": "5btYQUGyQhUi15DXpeDtRa4PZT4m3p9hzH4LMMhHqCM6mqM72ZwWr9RcqSoHddE1H2asw8ugB8H1AexwCs2cc2z",
  "key27": "2VP7HohWC1dpmjtwK3ct5T6hHsAvw6qmXEdqggJ7jG94fJuV9iiV9Ep35XrzHPyGqh5Hk1kUjSnVarMFUyPCaGB2",
  "key28": "3Re3Dexg5fNPC5nypi168yoFRNbZGnzweo4sdJzs4FEMZoozVTTTN459LM4A55NMPf3QfnpT3Z4W8SJaQ5ruNsjz",
  "key29": "42G4YChW3hiKjD9bezkVqV7tetWXHcj29KZwHSxzm9QmLNCoB2nL99nwoYjknigLBNXHBnmX73KJQ2rbAFZ4YxK",
  "key30": "29CYVBwws3vc1v7e5GundQoJkMN9VgtDtyH7tWYEoKUf2cMkre2xV7NrMk6kgZZbo1K4pG4j7baeEPE454tUQwek",
  "key31": "4GJDazT8SsM9pCTdxHwSd4MMvLCxKQiQootkChUkMH5FQRL5EQgy1czB7N2rdFYzjsPU1tgYGTU2zekhy3adtXds",
  "key32": "2KZ1SuhNnShgFBATeeBLNsh3CJ1BLiEWXkP9NoZG6DxgvA3zV4F6hwr2WjmuGevMTFtT5zj5LS3HgVff7DxcFso7",
  "key33": "SsP8M6D67aEJKEbFmX4nqm6sUdV3R2yjTgdKoSw5qekeSL53u56iJxGtnv52zmdS8G5ga4A8oRHeiXdNzc2BSVL",
  "key34": "3fnTDcyJXqDZjLhRZYgi8B3nmTbAQZ4vu5rYvjSu6DemamF5ZFQ41v1K58JVSWRo5CbZ1jGn4GxdiiGkDYLdQak6",
  "key35": "3N428KDXLgszTRy4s6rJYhhYdDX3PvWMDZh6xM27n9U5W6AMmvpNnULqWZSTFa4Jjm8yj5W24NTd3mGa4wrtRAYJ",
  "key36": "631ShYbpTNtr8Y3FegXqPVZN8ix3dF8Dfy5nVutiP8Rrz7LKUhjAmuQzvwQYyVUfDgsV6s6QrojckweYLYZNUAw3",
  "key37": "52GRUiPzFdM22hWxj6appbJ4VRQauJC4B8RBLG9jeDpZmdA2zjMJtta9Km7a4sLGz2XVAMgi4DyDEkLtcDvAqtwk",
  "key38": "5XpnTqZiX7q3N9waN78yDQZqW12Xc1jqMREyCiTvsMbHknFYNWrJtgorkwQexpZ4tggYg6yZVJQJL1juQiFYpovj",
  "key39": "3r7QMvV5WgbL91qeMHS2HTWjwqGUnsMXVbq85fRykbjJ3qCHBoUkZuwLVQL5YC8Qna3TCALEfPb7tzAKXeW9mzge",
  "key40": "4bW6QpESYsxEadGX4AquBvu5vUT5Y3jzkGf9PsT3qDcEUCEHRc2rK8RwvcfPsbFhGqLT2qVxZCaSQ31ne8ogxtoj",
  "key41": "DAGL3PpnMHyvtyxHDkEkSkm7bv9FCnagzXP5aEaZzyXbhMYpN6p72PdkLcgaZ82NAhaDpWgFtWVFkjMhBGHNDsF",
  "key42": "44EWCW7QSspWAAc4eEx55bXpTrFCg4Ak2Hagh8YdxvXXiXnJJJjy83346kRb5aYJbPBz8w8uRtw7VVb6zVF9HUEk",
  "key43": "2eBWySPeDVnjTgqDRr4Q35AHyTYXbY52cUg6NcJE9oRtMNSKq69KoTEjBatHk4e9gZSjF2DEaHirfQY7KKkxwmKe"
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
