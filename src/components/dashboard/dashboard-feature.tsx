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
    "3mwZTN4mbb8ZCaeqWR2TgD9GjDZdGSzRfux6Cs3NegxVM1VKKmsedJvMVHB3UnPJHcuvGwVvNeDNwjKJTJSK6qa7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uwgmEQzhRANCVCm7WzcAEqJrD6DY6LJ8271exYt2zXnAMFjhYdWfB4tmDcGLWC3L8AHcWVUmxqZL8ytdZVjDymD",
  "key1": "61nJxBacodcdriTSbSL4vMup7gzMqe4AEtHQ6foWhkW4Tp5yGb8MLpkoknVzUxY7YrqqpBVJxCSyNdfD9JAtqTAR",
  "key2": "4QMwyRMwpULF6Fou6BVdT6Gesrd2igaGQsGXS9vBUtzLP18tKvYxwgv2k73UqE66iqQVsDMt7GumVM9n9MdLohwi",
  "key3": "5N74m5VgBBDiWUGf2p66CdeaeDrvxhbHdAJAimS672xbbAJALqaQ1h1tX9LHTo6jc8fjAniNpYdC2qdgCiNvwH1Y",
  "key4": "5bbAsrhYBwpdHNKMw52qC78hUkuNKefH5X1yK7xedPbgVsD1WXqb4BP3zx6dPFKrLpb2RL1iNEPKcQfQbZ2mf6zJ",
  "key5": "3jUbiaXpwWNSPPNhmoTZGCAn2DuBBCFHzrqB75sPuRL5KemCQAJiDRXYbMZHVYaTEpngQRRTrQUWc2Q5QQuLiSHe",
  "key6": "3eKz7kpxAqzCSRMV6X6oRhBkbv4pZCbfEX8tBLWG3R2RqfHryJhhNaepU97CTsrNP4MZGnhszsSob2N1NnTAyTsj",
  "key7": "DsfwmLnUBJBnszfpoxUubVpuQxQoYYUbyRLaeknw29MccpqJQyrnnzuUitRoVzZYbA4ABKSkY9EfGDPLhHqZwtz",
  "key8": "5PLmaoEUoFjfD4vAZwKEy9zMSVegLHnA1ejERbEZYe2gbYN1bXx18rcn37RCEVdhjm5Ew8aZZGHL16ZsGWbuPDzL",
  "key9": "JCLB2PJcDeQ96XbqhDe2upfNAP5V6JUy1tDrU5YEFgVSa9TeB4FSvs1Y5ZuwogpY5gEkGu5zGJwTPjkTX3cdLxq",
  "key10": "3iifJBdu8eRe1GKAaoSShUkBYm2aZtGyY1awgxHCs4nz9Th96AHa6YW1sw7iCNm4jfCDtX9Q3AuxYJhS6BKPrRNK",
  "key11": "43nRufmfzbgzdEaVKCwQCgp79mKGxRNpbGJJzpsUJ7r1XgUYA9i25cii6pnnMRT7qSJRJc51fwT7e3rXGQt6NRSH",
  "key12": "4vmQy448BLeWLbkymEUphXJRCZjwdkJEj5Mr7aX5UVv7umwn9FSczSRs4zTaXBciH1BDw4jRA2yMq395gPvEsmCA",
  "key13": "25kuFjY5NKqEsDzcnFwczH4hN56KchiHjoP27g1LeBc9YAuEW5KYGLU6aiSygHUXW1G9ZfRHrmjfM5S1sYecudG8",
  "key14": "dt9Mg97vekNG7GTBwr1xt3A4Q6YXYH6ZzFkzh44fkAKZ3XJ2LqyZu34FN1wS1M79ie6L6GfSueH1TNQCeJjrZgo",
  "key15": "ihceewbnEGJPPBVaY8TzrniznMFE6xGYsFzKe6LV6bGTJbT2J1Fnq6JX1XXenNFUhVU7YVC9L8BvjmttkufW5qu",
  "key16": "Dxdwef5sGq6MFupv7VWEW5FWoq8grRH9U6bmF7owE3vd2cbBAUL1H1P1Kt3syNjkxqzrPG351jbN62ApjdgPs8C",
  "key17": "35F6XQeRaVoDKSRFR9Q67q7DJ5EdwUxo1ufwzFYatFiwUeNyN3TaAYj13BaDBdEyhbpK7PBLtka5KUiFikghzLjE",
  "key18": "66ihUFiaGZZ3Y5xWrMkP7cF8tKBGv8yAS9AHFDqrf4t2FXFD3whgTwsmJhX1BocdbdDuuN2wQZ71eF8Y8S5UHVyK",
  "key19": "wGd2wjyPsHBUkLF1V7Aws4gTF5Hmy9tSPw82qMQwyus8zKyMeWLUU34j9fdxvKsxym7mAjkV3SUp2PSedWCd4LK",
  "key20": "3dh27q5nWr2KGrUUDygSLN4zzJ4fUTX9pLVS7i4L4sB2jXSdutLNAN214uiTTgCGn4gZJ9RpwX1r5vH398Qx4Gy9",
  "key21": "2GMTbh6WeCFGEGgMhUQDVWxu6AmGVYF7Nv4euT4sn7y9e7NNFVeC5gXzVP7n9AYxwGFFktoEMQojb399xLzLGSqX",
  "key22": "4kELwoMLdRx8Nbhnhrwh6x2cPT6aRKZXSWDSCHyomHycQdVPige5r1yW5AGB8GTfKwDR9gWY74zJx3PDLPTH4xES",
  "key23": "4BtuySMjY6RAJ6ppUREHzGY6eoUpVhKasPyMM3fGfic6q8YMzBJgz8JoF6Ei6EjwSKrbBg5ojnegbzZe8F3c6SqU",
  "key24": "44W6sdgmoStCx5c5HP3B6p4r1neivTuzpdGasQa3UG36Vm1NWL6arDiUcLP5QPWpcfYUpM81fEBhESGG1WaZ59aF",
  "key25": "5jW53Yi4LujCHSetZ7addQXb3oqjhSavSbUQppcaDqR5TTBy4E36AXcSL46BD21jPv8WHNBBWKb3Td5DK65ie3G8",
  "key26": "bJnNCt8z944he19Z3MvapFujfXt83gPdJSd3gKBAshB2YQxTzPNYUUqafTLUBUXDcfxLFRU923zskUif8fuQbFo",
  "key27": "2bBhpTBRZv8eiN2PnnQshEWGsFqZowuQc2DqrXJZjELFvP9xTeKHMYnUBtwVM7GLk5MvrvJ15sqpxMHnVV2L2B62",
  "key28": "3p3UX7Ge7ao6osZGctcQv6CN7BxFKkH3A2aneHzdrD87yuGYdCK7KcsiZBh2kA9eqgsje6CcK9uurc3dCtLmL2zK",
  "key29": "3hZxCG6fQv98y9XkGFR4TuxeAHfSA4JbfJMkcJWzzphZyZNSBCLV2fDKReE8sgNdkzaGi58pYie69V3Vkbv8gvxj",
  "key30": "5MG5WTD2R3LWSLiBHhj5VckHjrEpidwC3bnzsMNWnvmzx9xXQ7DXNbay5NStbrjTzX4B7yWhx2KeSfWCGsuYDMi5",
  "key31": "5VVjM7nFvy3Fn7cddEBR1gAiwEHLhawfT3uZnt3u8sEugGB2te5LVjw49Hv8MK87Ne9Fua4NXeUfHrJYrbtD6R1k",
  "key32": "7jj9pSz8ZQLubGQ3TinE8kTa4zHg1hJKiwhC1CoTTPDr9YzG472WvqQA9Pup4AR2biKW5AW6UFRZWNnqZJ6NoE1",
  "key33": "2R1dYGgnaUqVy2C36ELZRriVbN78E4LTMoeYr8nbM5qyE2DfWj9oNVpuMW9j3onys8JoAXftEAt8cmCNLWsCEjxr"
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
