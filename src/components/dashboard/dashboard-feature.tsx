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
    "2j6zryZAByb8Ta5rLUERz3StpFG93Gfk6zdeGMZSxX2LAQ61ALxzZ9dFHLvUsz3oTPGqzC6Rj2vo7Dp6n5hnzKG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yxtJCoeNvpLABv9gwzhZHy5G7cPfrxcXCPm61yuqLEwQA44qL6oBvFGjxdVDDpDd89C9BGj9FsVxWv2qRrqhxjb",
  "key1": "3Tsti9BDmQYqUCRqPck2Nq4Cs2fbDr4HidpKA7SShFJ6RrBPqwg8vPFMyW7ben9GFGXAJtBcJnkZ9xEw9Vm1xzrz",
  "key2": "GMiWgmh2q6rGJng34DXL3SiDCjUsEefjKs8QTzQX1C7nVYahHGftjR74gUtNj94LSLK2rCL4NkY1waJkTT7kE5c",
  "key3": "5uezq1GXBVRegKkcSGpJjgcVX2VGGA3ZGWPx4mMiARdEBwxeeuYEGTW5NmpX9GXBa6s2RwvqkKdhCwVVU7CJgE9v",
  "key4": "2FidzRjomosAu1rR82MM9uihLjmwzLTVMta2JzEtK8WkVsCfM3niSAY7VdhXNorV1icRn6rRD23YRvPQjV3Tk6N5",
  "key5": "5tXed4Wk7vbKZyvwq1iVPeYeNdCLDE2RLvNWVVVsQNzdVG5GZHC8HHFDGRA2vEbhJTpMjE5WeF2EYD9qjRgLSQ7L",
  "key6": "4yRyQULDENcdoB3H6pV5pSASH14H6KGQjwJ6rP11ZDXpyjvKiY6wDSeUjCwQtVYsvm3f8XenkybN5YT4GEyoxt4y",
  "key7": "2tRfmbvEhckzQWLZJY31S4uNirBXipFeXSHCHnYnem51DwMpTVjC52BksUmPeXjcAGjw1ij5GE5pRjdFsxZjaq2Y",
  "key8": "5ET1UxBrGVTS9ZfY899ZATQ8NVnuM22uxR8Anq7FqXy2fTt7hamFmDhv22qyvhuZBDqXXMAMnZoHNGnmgK35Ykfx",
  "key9": "2ywXFwJ9qUVd9U6f25w8Hf2XTgCZgUyEwNPNVPZMSvaV3rELXbdccDRdUV8YmBbAHWaoD1u3TPJR4758XkFRjaac",
  "key10": "2LzKR4PmsCvPTYP4kwoGWD7ZMQuX6ddJvrjgqfhVwTgTBjjD36nmzppYzNEydGDF2EV9erD3EyEFPFYGVAjPE6FH",
  "key11": "3jnJZR8HLzecHVGDLuaS9UQ4JkADytjNDVQJFSzKC1gRc5V7HqgwnMEWBVfUuqZcmAJefthQX544VHWnusfK1kau",
  "key12": "4tysALjwuYuZcZbRaNiTWpq7zp9PQ8VMMi6axHg4puRqZuskMDmKp9P51mTVe6nuNWCZD3JKe57RA8FpukG4sYfj",
  "key13": "5CcjULGntw7hZV32DyeciwBK4Yb8mTBbb2ZLuyj1SwHr2bUmyX73JbUupp9TvvjSH5MkAMHwiyvYruSkEhNm1JSg",
  "key14": "515bv42cdGK4F37WztR2w49WE3PqmgnRMYhHyJ95DmhNv3V3EgctUk5dF9ZCUnDGbo2GRBy3xqgqRrkzh69aosk7",
  "key15": "3wuRapjjvjaaaprG3479KEFGdbB1FaGmYpbRuokGbUTocbdypS6NRij2i4RQ6LtbGerLdZodjry1eNkvhZq43CAw",
  "key16": "2ccWVHNb62JNmP3rUK5yaBUatsbUcfDP5XzTb5rnrS589QbqsqoC71oZATpbUcWFACFN9dTiv8qYHCZapeJip5Px",
  "key17": "22D6cbtxyefMvw6C7SriJefqkRApWETDHuWsjPXi2PrM8MDELE7NBE1rXDET7oqvXTGYdpRK3dmwKpQgXABPUw7A",
  "key18": "22L4oi5Uzo1jByoLNqqW8dNnryaXj7xLFfifzujXeiNZWePKz1ogv7c2sMhW198FrKgiPxUkR9UgqU1n4xGRgQTt",
  "key19": "5xcWGqnhUdfnDYfsKPFK41nNWsswBURkwfVpPHiYn1Q8zFYA3vBXumzz3s8HgcYJ96YJFU2RDLKDUHge7KugLYa8",
  "key20": "5EftSNhXKdSa7yHfyPDVCJ6U26NnSARwcEPZ5uRwD2J36AmbRFAX2bE5wJaptufiW3ewxfqkGYYG1Kt2FWSXoBgV",
  "key21": "5Lg4N3VDHUB9hyFQhLirQAfFNBuBNUzT2Mxzitti42k6EJehifRQtAvjg1RmFKkDUzKxsMXpPmZ57BqoLL9QYvua",
  "key22": "52i5GAoaajjpw2LHhVmj8YmTp1oeJDicpboZANG5LEyWR1wuHRdUdak5UYenZTvaSFEQzrM7wtp4b9dsGsqWY96Z",
  "key23": "4o4VbyUasKQWi4a3nehXkWSQLVYRMvHmK7mqkAQDhwb31HqYPnf81r9GFBbhygfAoe6A5DCr8Qkd7RUwRdcGNeuA",
  "key24": "5JUfTMg8myBuY1neFu3nRxnbdTZFbQQJNfabA6yX7isZGRxkWAzxAEQcxiX3s7Cg1UVsSJSNBtsYQA31eyMGFLVP",
  "key25": "2ACP9ngMjkg2XrVJC1dTjVSk1DG6dwGrpSRnJe1bFTUZgD5sDU61vQna4nDTufZzo7mkUJyBrdzFSVimGGh5R24g"
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
