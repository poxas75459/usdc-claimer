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
    "4QTTPswCiMR9PMsAN64EXDm8nAwGdKASXwF2ECpX9iLQGJqC35dJiFLDjWY6VnZWU9Feh4NSL7c4S4y63rEzvPL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n8rCXHxyVRviQxomDJAygETvUTFRwhAkaXmmKELjPMveYzY2MX2KtsF2p12zi9xFnZo5kmUxAhKXPojpbEx5D4t",
  "key1": "3E2BLyybuwnkhXuvDPaPnMuQnoqt5uUjpyM94FDvz6stqJt4WzLdbbXtpDEP3bRkUJoAwLp7SFyuuja4jt9Y9jJn",
  "key2": "FUg2GtxxNs74bbAa3uRYzJEVHFj954kQt3LE4gs3AeeqYu97tofKdLEJFR1FuMRn6uvECEctg1LGkELv2EKebn8",
  "key3": "67TbFQvhd7wKypLJZEU7SbDAioS5V8maya4XkzU4ZDQezf8k7uc3XKixBw48pvi7VneS2rhWP9RXzkVdGtY7mbuQ",
  "key4": "VHL752ng8RB8jd5JfLGavfi6ZPPUtHytUsifqDy3hkv8uAgmVMGJsSNskEmupx63wvthkUY5YafasnArqDysznT",
  "key5": "2yfDsKxmP1T2tc87EACsrsC7pJCUcuzmQpDuTS4wZAPor5fbNUnM1VuiqMnotZop7ws6VJdvdbN43ytG969LSysU",
  "key6": "37gSFoL6bJHSSeSQiAWsWapLuuNWiZsrGSfCG9Dj4KV9bhp9nnffggrTjJbZ6M7FKGVB8zPT49dGhME155GXCuxG",
  "key7": "4ArnaDUxjbzH5bBQbGy9ijGcRWK2NLRQAXz9jXfHE79n2auvxGgqVTwH5rfaUeytFLE7K84ozUR7zGc5RguTtfEg",
  "key8": "dXcMz14GfMZTVJ4N28U5B5XuSJQLvYSrs4zfU6ndTMarZvzYe2GNHrTAkGhkF3Hn4MottVw8RCQtsNFMAQZ7c8a",
  "key9": "4X8Kch3whrDVqUwktiFUknxjBG8JVmat7ao2iSxVyjfHpjiVbFsuP7MzUdf3j7hdQboawuEvPyEbpiAVA6BzVNQo",
  "key10": "mXCKZWpDs5hoyUFTYLu8UTRRZwvWxM5NJJgSMPRqnZcLpJogoPdvWhmKYbufZoztxuJFWhw8B1afPkcFY1wMZTJ",
  "key11": "586n9nzPE5Zst4k9dEWi3EGcFddYrjv2tJKeakjbbbArTkAffvSS2uo2JD97RYmEQg6dfpQ1r4iJmvAA5Jk8VsYX",
  "key12": "cxZuALTJKiusJGMtBpMq2Wm4f9MScvfukifmfQDg2jJzkKrb9mJp5nLtG5J65CekmebowPetPvdHGQed1nm86TK",
  "key13": "3F33ZEo5tkbN1HpknVHmkW6aAdGycuwMmVPiJx1fv6uSoayAjo4G7GNW9ViHyS78taGtq57eiQFVqEVVm6Bu6fdV",
  "key14": "2XDtnZrYkMAgYwgLCBUdyKWMogV9MXaGsRgv8cojEhne1zhZfJWUqFAmpCPZBNFTXjarBZwSR2wZb2uypXWTaBiP",
  "key15": "3dB4dP81Ehk1Cq717Xe3hyx9xt6txrRXbK73Ba26B7juffKiy2anzUesmAdUUt1EJonwuUoXNBDTJsQJjNE5tjUy",
  "key16": "URs1MjLsgVEtnWfgQcYudLzmBgKfiTQ2d1LpeCLBbLAqgw6ThVWx4BgLdn7Mdx5kRh4jKmZ7AoNZAt5umTSD46D",
  "key17": "5bmYuR79TB6wmpG8FcAzkJxuqRWFks3fnQUdyeMvjtwtCdZzyeMeJ3VuSUdRNuPc9YquztMk4ze1jN7uuqfe89we",
  "key18": "4v76TqsR2UW1Ck7UZ1m7RVL9aj7N7vh43ijKKkx91F8TLffQcMMSct3prrRzWgdde6gc6vcpPVLbUbXS9GGB7rq9",
  "key19": "4GiS6eBE5m25YP8vTxpxTL756tZ3bqSzuftDRKeJC9tuCkm9gYLVgTDGi7pLBdENWgMDBBmAmh8okA2FMros4zVz",
  "key20": "z3vJahrKrKq3Yw7PtDCfaTLSb5htFotNb1ejkxZGWCuHEMjN2fHDawnTaVPvPwTCuiC9VZFJH8A3rnD2eWuXiQF",
  "key21": "3i36N4pRgHa9Anyw1rE3od3kvtkTRZqZpBVd4597EdrtcY4iTRF11Rqfmkk7Pjz9R7Wy9Ge87vZi835RyaK41jgE",
  "key22": "5P5en3ZK2KFJASMcNYWZYYBDhxG4FohFcMX1Mofq6Bzvo8cCjQg4oUkqS3WUwEK9zLHh3E2Dj4mSoaAdSdZsZckw",
  "key23": "3jJEHVPgWbWT7v5yRFRdWtAEpBYmiBDToVc3jqDsqkb4bVfoWjfyHUkDLikfPwATPyBBP5u86zFT7JySUQkR131b",
  "key24": "PQeggrztrezhbJsqLtWjB7yi3yDRavweJXN94WWLkMNFgzzrvLWffbLC9rMdFnuLSd92YWes5odsbLs8siECfyk",
  "key25": "38oEJuMSERGFHtRND6R5FLLV2ieFFx1qfUf4YnQDkP8Q1hamHmekoB9p9v35YBZTDWwwAJrHz98yPaR7nr5pcKdx",
  "key26": "MKZHECaSW6jXdMBupyfdGfYjGgmWSRBpzivdFF8SHmvRsoLvsGoFH9yJQLzzfy1ijRUUAYhKG6AMMhcjAMcszUD",
  "key27": "486UdTFocwJTTP6kMBJfFME62tDk44SqJbiyQS7ZXWbDrZgvbZfMG5wSK27tUP5qbzBnfaSvGKthP4UFLuNXTKoY",
  "key28": "2uM83E6aXEzTRAHr1nhQqdb7sxL1kSJ5GqX57KAYXMMFNkQZ4vcjHC2WW65wqPr9X39f6M3LnUyAippkrnSNxeVm"
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
