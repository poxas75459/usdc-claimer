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
    "2W18bXa3D3JdPPKjXZXQ2y2BeSGm8vJSiewdZPw2L7YwCF5ujSkhhyxg8Sv42YV6MbdhvDWpX9qyqJQB9E67d13b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2edfckk6r9XfgpKetAQ6bf1eA3RoSg3DgiCyxoamnVEfSPfJ765Pw5KquyhuD8etkmfrJracoQ34XvmUNcRyU62",
  "key1": "HavjaF98pdBRS2QW9uMsueJKF4EEzcHUibEV3h81p1oj9JX52tWopz2YRbbv4SNwYc5DW39a3fUbT4g54jGPfaR",
  "key2": "Uaxov22qgywARXLjEoAbPFqTZg2BuNVetSEovoR3TNEWvhPdw64A8JW2m1MSCUj5e15yuNon4NwS9UkiUUrX1cH",
  "key3": "624unCbkTEV9DhzG4UBEd4SbgAghzkiA3fCGfuPNJDeFLsT1YBucEeCPDPYBQjgrrRdynEgQqig7MjZDFCvpke1g",
  "key4": "5CyeuGzEW8xCJz1amnYLw4byXcmbnfL5TUHxWaxBPW6a9C1bHRxWje8FvFCSuuYfqwEwkKpxZ3RiNEUY8KVFMQKD",
  "key5": "66GTCd3ZZzgfSKVgqqCQYvZ3jbC54KUb3CgfTwzEkJME1SwXeNVwXMvt1GNRKLBv6Mze44YsFHL9R9RgZM9RCq5x",
  "key6": "27rMjwRNhAVH7Nw6QR3GPdcUpsod4bHUUFrd6gAEg8Nno4eMDFEUvSGpNziLepSMaYZahS7iC1V3wkq8Ea2akN6y",
  "key7": "t4H9D3rwmCTLrzmv1N7Uh9e9kbZLCcJm4W45e9AP2MLemVbhMoG3AiVs1cQPLZjaATvJEGr8KipeHCQdf8jiyxn",
  "key8": "gW6Wr1g14LXohPQcPe9xTUn6RFk8M7mSrxhH5EkAcA6hezUf1Y2f6Az8hGB7CrG2x2sgApPq9bhmM45MbHwyVEf",
  "key9": "4zLaMYod9hnU2km6Mh6BSnDgLg7NYuJGTWqeXUobaEWA25SuwGQgn8QHeJSV6pUQm4v3pLukXWGmsbdjfDm5krcf",
  "key10": "613iDaUouoE1LUsB7dgP9S7Fr1ZA8Q83oeXsbhrPLC2F3L21PnuLBGU2sKKYtnNsJdNjVicyhJ6681tAwmtSKunv",
  "key11": "a7RtUKddn3ov1AmyEXKBUUfhJ5rttE3icEPpjsd8bqgWDyD84ABvd8fDgooCLdBRi4D6ZXFhqxaAA7GoxDowy9Q",
  "key12": "4dbmsbEU6f6MfpNhST1uyUZpi44oH76NrqhfPf8JAcykNdLDHsCqiShzomCnFq2QRXzt2VeYmpnYZZxFFE15oVgZ",
  "key13": "3dYgwuWp9UxGVeB5ZjU9Ka7hn7no1QaqDzGSLoCedChX4wtfLM3xzKKozVW23K23n1Ny21FjDLkK6jMgM94VgdMX",
  "key14": "4M6RNW7dC9gNKW7pFo9YrniSXSD9iXH9fSAKVVQgs9FTwsBuFKVtjLQuge4DPT1riuhUnScv68hd3WfuWyxZ1WTd",
  "key15": "2LSccj9P4BQZYVRaCvXYRkD6smmS2ye3KwXGb7Vo6e14fiJkjPUdYGkzTpwwyAUfEjWsLJoSyFUc5ju6XPnkFUfK",
  "key16": "76uiamGGJmuorMbk4E5uYZy3FE36MkHy9ip4kLyHKn7roLRsU1G9tKWsDZFhKhTkBsY5icqPA1yXBgyLDMjpF9b",
  "key17": "5empLHdWxXW6RAdgkSNRuSFNhoUQe8mAK3DiLEaqtvxbdLaVtmqa2ygK5ufhsgj53gq7yGTGNmcGnMx7oEVQuMg1",
  "key18": "3G5P2KbsMaYQcB2FYayUA7P3NTCXEj6ESkR3XJwhiKJWSCTY65VVG8RisdTy69KtSKAuVG6yHF2TrkNcP74S9CeZ",
  "key19": "4KpeAv3HhAgxWGnqbfaZrf9knYS661KV9L8BEmUwzLqeAfLDVJwVPDaHhGtTK1SUY37vjKrWzevdA5vd2ALUGACW",
  "key20": "5ewvvovqEnhiuJmfQ3pfrP7aeWMaqgGXus27GUu6Zx6XwywJ4esNp9pd8hsbERheDDT68jouBA19awYYkam6t6ih",
  "key21": "22TKPyAfKTrRUBRJfuY2yv9LzH5pytR94EGgCPyDfhvEd5qSrpimeJUXHWYhaT6eLGKib4yzN7V2xaZzbnFRTcjr",
  "key22": "NrqpTunks18pGFNCGP7GDYXZj4W2bts761DgWyWBhQq3aYg5qYMgQk3VkzuiJtrbspfD7bX8JjhMUeVWX32DAZT",
  "key23": "W3QAwvkiPJJiiKeGVvewi1AXbsRNXbVjadZiDyJHfR7JzBoUAUEPKMhuBMT2BYmUT9X5PLoDTsHEPfXt6PRTfps",
  "key24": "4Q6uf6u4oWdpjJYHQ4RYGASCqG3hEpUcyjaaUHq4kKrGdymzUSxrjF6F6X9EC8Q7cLdckpcvNY1PXzLmJL5edJ7u",
  "key25": "2qdnsf2cw7VeMaTUe8gwxaDfYNUxQWYw14utwPAf9FHdvHwd8HbbsuMNfUvm3q7FJDmUDQoWVu1YvspD8etBWAk9",
  "key26": "mhAdWvDwAhVoHBSiraPMsUc3FfxAycUz5xDuTzfacBnktHdJoyGnHbHQ8EorMnHTRrWnZKiHLtZdGVJgdBchyy1",
  "key27": "46xWPY7qJPqmTgDBx2Zmhq4BajxXxqv6V129GUyq2GRwTgyGsdRuHYuNYDBFYdnae9BAhMPGekQ6rXjvEbXJ6iBv",
  "key28": "vNRqvWQAP2eF6k8eQiyJ5DSMZQoYtVDFR3xpK5m6akUHpaK6QHNKk4A3eLS3SwBgEqnJe9e2xnemtUSjnYfi5X1",
  "key29": "55M7i8ZTVA3KboKduxhMzsKCxE3kCGj17Q9zeHarRh816FgiDiBffw2DwaxeqgCzaEyxDjLdHg5b2sMKzRmCQDb9",
  "key30": "2R5rdPn2ohwzFExLW6FqUCgsJUc5r94EuQxGZKLMwCR3b27edT1D6evZayS57SkePQh5D4y2zi1M4y6AB43qqwfG",
  "key31": "4dWbmMYAzSLae5W19yQywY8U2meP7RQhbNtxE5MDaHAskpmKSH2bHu97eFZmB6sf1PmkQWCEvj9hNFxoTzfDybhP",
  "key32": "5kqtLFTkfV4pUBaroR2wCbWS3Kk3Cnf8E9vkbbgwKQ8z2NVQNbAbfKmiXtvFziWUpjbkwbBJnq3zKZzNENehHrmk",
  "key33": "2ardpmiCrvuY8V427W82wufMBQDKTHsJCe1hBpwMWTqt5i3A4CT1Q9VPEuXGfG5zwKVu2fQuZZwWfj9i3gWMEXoC"
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
