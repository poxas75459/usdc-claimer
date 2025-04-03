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
    "5vfw3W8pd9bMKowbPwF8EWopHCL4UENo79cth1XZsPwmRhGD5DKNaT4KdjNKmybN9BkrU1HpjAHxRy9c8ejRDh1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cAyVxP4Xknafc7GdmGEaHNzwYqftZfhfZkucsamsadc2RUGyiam6ZMQyAznr13KZDEKT4SLRHHoFqvtMu9DVyks",
  "key1": "2XYs4rCRGwRrE7AsDXFDMxPSo4Tgk3kJVhiGAFg45SSNNP1EWHDAHemhd6ayH4CUfimqg8GM1wL2hNB56FMEhvRU",
  "key2": "RG7zWbwduQdLigyrSwb7M2nnVyNGF98y9ZN9xdEHSPQDun2oyarcNguPWgQqcFMUEhtqEDpP56yqJLgw9UzZnYH",
  "key3": "5yLwdv4Rtv4RT37AN9QfSLcyuU4sMAiqVETq4KVniSumWdKhtfcDy1SxX6XksFqQp6yDhSukwv1dxutgywXrS4K3",
  "key4": "3hKaBMb4gaMbb14QNv32g14G888khYjEZcHm4DE6f7FQtuoTe74CqhSYGxeYV3eGHjAURdzx9V2kXbTm3ps7kQGP",
  "key5": "21cWdiTpXnq1nmctziNzSLjGpYLq55qSvBp3YEBsCmcWteCa7TRMmaKg8GD7PL5UhT42APeWq3UVVZBD3kGTNdJ4",
  "key6": "2Ec5aQ6HQuBCCJpNaKveTxx9tNtex4gFFUdiscvkgtEEyx9jz3jqSKBZpiAkG1u6CcXiHPTpSsEEBFcSovmejDZH",
  "key7": "5YW5x4TUV3adBy3t4ecT9KsSEo5i39HBDwyvTKHzU8YRShWHBtezpE48qSVC4xw777TDH7C9tNNrBapQwoqJSgfk",
  "key8": "4azCKnKQyMyKnNzXjmLDHWD5BQBv2KmKtVg52MjyrrgvpeC4QPLUbsWxWQZ9CUYbyL8yeRb6w3iCUuyW84GnTLsz",
  "key9": "3iKh3akAL3nCMSonn95veTWTSAUG7zKbx2Md6QhzmzB7d3YpJuDfMetRTnrPersy2RHWupQTirZnFZKVgyvJkyoM",
  "key10": "3YVPMHRSSCKWvPZ94LAADCWGDtWrMQgRi6X5Pv7wx8RDaF73RuiypwHjbdpeT8qbYDdcZwsUPfjUaW2PLRZLRBib",
  "key11": "2EWGJp6jzJRvwi8R2UGbTb83GL4oZzTr2ZSWkeQjXqMovnKDkCvekAUsE8P4eg1C3dUyTUZb2nr5dRvfmBHHAKK4",
  "key12": "5H2b1AS9aH5ZWTqUGfsGqnS5Bcv4zjsdYrVhHTrA4FH6ZhNPio9hh5y191XtzYGo5MnwcE2WYpMXw7F4J2PvbJJm",
  "key13": "2knkjL7Qnkp5qKsCwK14rsZ1GPZsnYGEo2gP4VArNWXXCovTbFf3gdjH43dPwRBBc33fRvA7C2HurTkBkctaUwg2",
  "key14": "47xDNvqKpjYABBEtuxg1Ag1aqqkPJ4yLork1Mh3mbDQkXGCQuvGCd4NttJYiX7zAPooKmapGzjD3BumtZkmmKTHn",
  "key15": "44u6azH1bqQfP1ygxn8R6jpsCfibFynYimDfqUcWRbHyrzDpQzvGvQjuf8W5SCUjW19kebEKfCTDJAFTbU4o8B9p",
  "key16": "5oAXfmk8YwnXpzUn3btCQPVwQg6aDWeYhe377SeQHrGNNzYn2R168EZmhKhz9qiyfDNswsWqP3xez2rE8JpvK3AT",
  "key17": "x9ygrwSj4xRFGBFbqpR8jBhJ79WiuwRyLYCWahvWSL5QGGpHrngJ1HfVHjm6m7WgPGFh6svdLZvSHy9oVotsHYF",
  "key18": "3nvZMpfcYEp5aFz9yzZm274WipcDT5iyKCgKbtZnoXzrg9WDeGMzWrpaqcDtSxBuowwHh2tfeVQrPxtGjtqeqr3V",
  "key19": "38tfp8wKuVHaz2DvwqSGrGZqs1frVZ16WemfvDXEPGCSpWjxERYftBJd9JFVSQLWXReKiLzEBERe8Qi4mxpnhXVm",
  "key20": "44XFpENc6JFMV88uXS51AQo1epeSvWHThofV6ueMyFQo5AG7xp3FwJAPU1GSaf9epzzxLxmF4myU7VfaQZJgdChG",
  "key21": "5Ck5XZxBGLfn7usKxrZcZLG2n2gzqr26tUwBgQYGNsJLABC5LDqV68uiTZSsA1yPa8bxceWxEe8kkU4wtPBdewgM",
  "key22": "379BBZmimuBhFtTWeBTjpJjFS5Ep9KLTHEFCn7aP1BmRsxLh9pbJB92T8q5MR9pqoYRLfsLW89fKHcK2wdNaFTFc",
  "key23": "5HCxrYrDMcKXRUiT9i5jugRRng4owpiwpM1Wd5R5EeL1ezUbQiqkfKq5ynkwZHR7eMQ8JkxvXUK7RyoTbSvwaJWF",
  "key24": "5B4coG2Ktt3cfniWYbpeK5pxe2tB7LbL5nnvt3rSDXnA8DDVdkfrxUa4UvrrPpdofrgn1wVmC2Lpnq5XL8Po48Xi",
  "key25": "2Coy8VABcnk1Ncwdjat8ADfq8RMLUrs735FnooJXyWWFyZrmzh1X8XCjdVDocHUUChGgpvU8PUYx6R46vNuPTYSr",
  "key26": "5APz1tYdjRTTv4PgnyjwfynacPNY29xNu8V3WNeGu5vtews62QaguP4xcnKzkx2HX3ydHu3PDMh5GyowzrGzCnPR",
  "key27": "2hqNWBdrgkp22eEXFx5KquMT9JyMjAZQ478ndiNpneMTfvshw4895FAb3E1HaqY5gSot8SzbBQYkAZAevbix89Gw",
  "key28": "3MhuUddUubgWhmwJ3ae3UBfUNcNQV16kTmVu3qUoDNUzRtGeFAHpR27CvbaJEtS7ByUovzzbAwz1oqpHth7bqrwA",
  "key29": "5JdSvK7FPQgJhfRT6uSWUs8o6R3dCx8CJM6mZ7vPQBhcJK5Ercanfxqqn7pfd8gt4kjLuBwvTSYBuef8wZPMWfMv",
  "key30": "5Qch6LRYnqHqhbZYdVP2nvKir9SEiEfCKxgvm9vLLNyctt21DuZnj97Dy46FoZbGrzeEND78pTTQC3EoqXXuFQD4",
  "key31": "4NEoQArZwa3jqYrjdMauTEppiowsmYFkT8BnBLpHYJyTB3KDitin4yByb6twoMRn1YbSuXTNR8U6EcrSF4dPeFdr",
  "key32": "33ZLa1rAjrZcHCLpaqT5GFx9twcbM5HggJjr3rWvh47hRHSMwwEGt7up1o5ri9SYVpeXUDa8XAk7SrAiTMdQxLUu",
  "key33": "3SpmoyexpKXAwZhcimUmxApcxntwSAHs74oM8Sbz1DbDS4684cxBwnRhS8SZkR4rFSm94jocSUDverhGoaJYqQn4"
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
