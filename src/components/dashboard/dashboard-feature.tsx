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
    "oDPjNxnLbguS6iBBsWi8AbDVL26DMJeVtA2kUfDzjWfVobWKjCGfkGAt2MJmhKuupJojgUxamDAGnMUorxcGUmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i8iiewdgAtFWKB5BgVJYYZbarGhLxg8VoLWA2Hqx1ngXfC25ZjDazDcGP9M68j1WFYwaP2yVGfKj6GRVuVMtGu3",
  "key1": "5EXVEvKgax88pTLGhexbScgYYjtFL8ymA5JjcyEvG6qHY7dbP33QM7axwhAUDYQkZMC85DvfERWFPA5KDUxGaCPR",
  "key2": "hM7m8ZbqMiCQ71faHSdfCZoDE6ditaieeZUqCeDZwkNE2C4KKYbUPPaCgckQNCHLe6R6BFzY6CQAF59K5Cp1QKq",
  "key3": "2oSZGkcKCBpkiAm8YGs2H8UcBtVwVYzBP2osVkTuCqQeZ2T3AtUKivqj1zDgLwkFoiUJw5qihLE9b9re7zzbbCJL",
  "key4": "4FA6Nybo1Kx2AmeEr5TEhAnApUbJCmegGo7iMdZQvMkopCdyHUgDxb6dGMWopDojxn2Svphwojs4F8SCibzoBW2t",
  "key5": "PvN9USrC4dC9QFqMuzHRATF5XGvFxsp1K5DwDYuJFRHhq2rJWXp5Nb1CScmsBpWKkAitJqSMxr3nXzjzhDXoJpF",
  "key6": "3xWMYfounytyWKUvXCMqx1k5UF14hGmwJzPfga7MVsihuE7gEM1H5zxRoZbN9KkvVJ2ngzeRp69YJbyBQiZxtaw6",
  "key7": "5SLHgc12Y2XEbfM3wMY2HXDgxdH3PzV1r3usD7CxHQX96iGdiaigCib3YGaY8EXNYqWSD15i69YN1tStSBvVSt56",
  "key8": "i3qGdiMLw68RiwobSR9dxz31oFNN8did6eWmiXbrHq29uVVqu2BftQn8JExg2rQBG9NKCCe9rp6DyoJkKZpwcha",
  "key9": "3kyQiqKNDfyPxFdckTWqSbUMxjefao5Lvdzs6DRr41L8u55i1nrLrkinyPCHssG81YYxm5xzLD1AJgaGSbBEEF8X",
  "key10": "f3idXSXTwXKTnG1ifWjHoC1JK8u2SzBokRfdp8uKJ8QnzNGh8z7p3ZtUYg1B4AmSoMi8AFEFqW9TDfCgXdGFgUk",
  "key11": "4QuH4vLq6cDugGy1hKbgphaUo5fcHXh3xsi9m7sC2NmHn8akyd9EN1Ywk1FFBAU7gHCU6TYj2V98diGBapMxaEid",
  "key12": "4PnfYGotT2h8gzx3MMtkMrhMrkWyRSHaAnHmV1SeqVY5QoREQvef9YxsgkXFNrkaQuM6Qq15p6XmYNNoQzB3jBfx",
  "key13": "5eVKxhPoTMtryNZ5LW2hAZJohFD43vDKYW4LdDWAUm93Waih5DoinP8aowmGTt3bVif773PPD54wNQLZnAGbPdRD",
  "key14": "towBiWVu7CPUMGYTvttn7SGcxVfLUXaxsnoaqiPrn8Dpwdon41xBAfcMttUomX1szT6Fr5F65r7XJ8Cn2G9ibSD",
  "key15": "5tBWeHYFp4vF1CWDysnRMjAPLwQv978N9wRQceZKP3kr1Ruv1dqv4thJDKbcDVpm9Rd6RMv2uPsCZHVxQzgv3iyY",
  "key16": "3HiLjK8WPXcr9r24awKp7onSJ2Aev2WnP5FQYyZLnnbuB7NHs5K9H9T4N4rz6BK69oKtawpybLauQNGuzeHYQxAo",
  "key17": "3tJZAGDVUSwMcswDTMUWAk4JdshFBFZG5AQAVAnckzefwNtvCX6cJUgzUj4SraNxoC6PiYQnY4vHXpp9VRNibGTs",
  "key18": "MRVBZ25RR9JrqukuUVy537XQvQdZ5MaYcSbajEVLEmRK2ekRewvP7Abkv1ao1JzYVoZZWsQ9sqUsZEaubUxHhkv",
  "key19": "mPY2SxVezbiU9ND8Y9ZnwR4djy6rgAoz8phndkGz7KcNR49k9Q1EKbZyNTnoefQUxj9knPMeQ63FdgGYBjsWize",
  "key20": "RXCTNG4ATJFdpE1a7seJJYHY135758vfRgtJc6L7hSpkAK16hyWJ3GdX8oqt3bToveSe32Urmwvt6QWXNaoxM6g",
  "key21": "3noj8TCS3vmswEKg3JkELdbq2MMDqBRdo38hLDKykLxNXeVYKQ57NSA9w361RE6pRCqo3x4LEkfefeSBgZT6YsyW",
  "key22": "4YH3CY2U8o9eXZStTgMNDcXXNumbd22jEhrckQbokA2vcBt4ZsMPEHYxjAS2UJX48GCkkjkyAEYoNkt3hmUQPit2",
  "key23": "48yFHc1S1HJHbmMXjQD9vzJ3kektPy7rmkhAyojBH6eZzaEQcCmtqrsFumpfXb6r4UTzddBPP2wC3jXP8uvoeobM",
  "key24": "5y2FhKVpyuepQEWfL68VwDx1JuiiPifZ53yhHJWA8mNzujVXYKCx4rh7qP9qqim2TysfTBoLNf7EGkQdcnhxuZrM",
  "key25": "2yrpMTjbU8ngWvq9cWXLp4YJUi87sdrHkhw8rufXUNsVAgu5CcMMUfRCoYWGDwmTqowfrkbJJ7CU4tUAZHbh9kWG",
  "key26": "4AFVkScrrytdLpS4q97fHpjxerdpC2N6ZyN47qRixj7CTsHL3gaSfydnptQkw3NMZqyaNYE7ZzXj846J3bFqkcFJ",
  "key27": "2nwmg8eVjVFtFRrE5X9SErcVRWtMDUjWJz2nWjopNhCSzFXbvDNjtBWDu1SypLW2pjPR7dbFkmHXothx9uFZuWho",
  "key28": "qAkqpSx5ZBNKpHgqnmXV13HwDFuERPompiBVMJK1EHzovdpju3v95kyLprUps1HA3vrzRF43kBXrM7KCzY5B5x5",
  "key29": "3aCeH1bL1cP4YdUSU6MSKZ2ahw453C5H1pkAA6FWiwaGhVFmgqwMXVuNC2kGR2GtUvfnrC7whrrbAuUby4R4ZJ57",
  "key30": "3rj5uP4j732f77Q3rMYEvrLChtZLb2HAxnss8fBUXCqWoDqyEGdohppqKeaZfvsNaXsqmD8bQAT5zrkB4hyMhM2A",
  "key31": "2L5Vfdi51dtc4cSji1RT1Z3sJB1wze7T14UsnewQM4uuoEWapgmKqUDSeor9xhmSxY7QApQS15rQMTKdDcR8qeqg",
  "key32": "5ggGaZXReaCvFytQUJ5GuM4FTBXT8bCF2pDzjaRAJ8m53PCa9AN1FDDXAGcZgAXVfLsxxFP7NrLqi3ArPRfgmaC",
  "key33": "4aUxfeDiPgrM5Pu9o657eSoZkAbE2LasYHrV67ohj418MsAfemprMoj95ZYZSosZYxnjpTEmMTHD1nMCWNzsbtgs",
  "key34": "5y3txvMt92bXtwnK7q9riSPADfyfgVGWvCg3gkkWh9nuhqKycivYnEqjwxC8QJDUUcNbKKgaL1umsVRjqKwqiND9",
  "key35": "5erEwffd8nmvbiZ9RHK6TfXcvXH1LrdcGsckBdJCBPWSvrptcnMHumYsogJtgu8JrZhWQnxjoZ2TVSJ1aynXNDay",
  "key36": "5M5fDEqjUFChGGFGYkLZkyydBp6vgC3cHSpDiPArDRrDVxyo9qoNttqAVNJJ3whbkom4sDQNmaMvPN6nwxy8NtGr",
  "key37": "jqpiGrQ4dEYtetdapu5uZNSxEe2sUwzspdQaMsHMv91aeEj4pRjbVNxeSf8QBSrDvoEy42XyAeGoYRQ43XsnY4b",
  "key38": "VrKrAt472i5jR4Bdtxx5RNBGfgboW7ig6bXN9udaywZhvcd8duX5yH7xemCwvCinr58rJkQYkEGykbwxyzknMAo",
  "key39": "3NrCE7cocQBU8cgn6QdoujdGxwq27eYzdCJ7Facyw2nNdJjUaDpDWncncfidb9uRa93e4V6RXNcdguagFgAs5o7D"
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
