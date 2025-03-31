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
    "GAUXorvmwiwCkCAJwZGGt1gVLSfbWu7vjLgPXbjumVD5os7qUeKTFa4BeBBFjuBqSxdBuivbowsVmXCVTL5aqUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QmU2GVkUmyDJG1bQhgyTgiUzhxinStLXDQiarvrxM8am6k92avssJtrCPBP12WYtAHy1WMyFHYR3kWos37kashq",
  "key1": "3Bor8Aj16k7bhT29GXPuQKFfNCjULh6ETa88SjqLfi3Cb27B62NLV1czbjzhkQuu4LWAPYfRG5mWGX6zWYWBgqTm",
  "key2": "5foT3NTXgbC8tLub4H8AFPuyveTYFntGfKPaMY8S1tjhgVdiuMECrJQWmHLXJKJqoKf75Bm3JFebe6xvvGQKARGA",
  "key3": "4vMmd7prTNSZVySS3aEW2v1qbMCPkvNMG9tAKsSwBLkuLtbKTXaXB96DL5JoEehB6hfMvLBeK4dRM5xLdaUH8EHn",
  "key4": "4Fr6p94tG7LmDMUGcbcXYj9bM2w5Sute1icZJtJ69PqStYJ7vuHGT1rvGHccV7a3EzEqLXC1SWdATZJ79oqi2iP8",
  "key5": "3hCGb6JWjtUGygFEq5gKNHgp4Rz83Qi4Cup25NAj5rMoiYtDt2cet8is41s2Up4n9oYiit7Qyy8swmnA968opKpq",
  "key6": "3Ukx5rHo6axYbLx2C3t9LZnQChURBXdtVcm8RKqe7pyqUwTRRMtVF27QmvZrKup79DVH1D2ZT5m9P8bhwjz5tPXx",
  "key7": "zi8Pj1AqgxM2dt1FXMV7tL7C7ZjQBLTAwyChyNE4f5BzxSRBEZ52XWcwYTCDVGNVGizFrXt3WXHGaB3C8GDbHum",
  "key8": "UvHxxNhqLCgRX8d2PWejjpJfZVEEmFL6XSn3gjyPV52hpxnMUyQXWL5o8MFxoAZobLNCvN6zUAhcbqkJs37V76r",
  "key9": "3vGibNKqxmpKSPoPmZ5mkT4rPex3Ra1NdW5c71oFVcrykqU4a3oFN5rSZd9gCBSovBqY4VZamHfv47t7zj8R1yQ9",
  "key10": "5AJb5qhdAfcTNfV1PDeZywApe8ZyftTfpt6rH49BGXvS62n2EDREeyHDAPvr7mF5Nk7Rj7b9H9ESzmtaoPziukK1",
  "key11": "33zPXLfKJvDgkqLFVKdfc1eQkBpuWPcsQr6Nix3ZfcV6jLnNv2zSwHHsde1R9m3kcijsXoDYLKNwK1qF5u6L19qk",
  "key12": "2XYnio4UQPdmopqPXHNY9CUr3aEchCgzo1rMs3cAEyzmoJ4LBfkqbEHEsU6PJHqtnCM1V9x7g6gQWSk6vTQbD7Ai",
  "key13": "uVCTZ9vVRzdMc16ZPdDL5zBHu6L8z8GxS1NoaLTxpumrxyAEWDRX2jJcLzLHWe2pzHt5MifKiqwBUXqCqW4ibUh",
  "key14": "4hQCRP9PPePyCHr5QSTTwSNrrghtMBKY3B9LSMQUQYi261S9K6FdiL3Q1CdXBbXpmqPbjoghGy9Nzz8jdfv1GNJq",
  "key15": "2MJEWDS8ToVeboLYzvWDEArQGSg1vfmtc1Pr7ioTB1Q8r23EpSsYvhg9CaFBwbJzLHAuvJE1fKiWXagXRrHuu1fR",
  "key16": "3GAP2XQJHnbHAwmEQmJGbs6oY6dzVyD31Tx4kzKkY1os67cKJaYbeZw6itpqMwPAP8tnqN8CwinLiprhB5jHmfDg",
  "key17": "4GnrSEftLbsqwHWFCXXZ1T5kDxK4yBx7Dt2x2kYgnSBojQyHX3AEEMjyQ6V1QuZmRsfAGwr4jvyzjwMVV2Z6Co11",
  "key18": "5hBkL4TE3me4Ssuqxbi4ig28kJDADD91VpZwkkCFYJLGQvNUJSTV9q9MEsVUFJjZo5Qsqb28hVxBd5Gp3MJVdSWj",
  "key19": "2Gp6FBg3w6oRgANYQJZYiJyF5gHve81tUWYzcNqYZUc3kjpq7DZR5CnHAV2C3T9STTRYFjWQWcj9C4Lbms54EjT2",
  "key20": "2exN9eUrC5H4SWzHoHqzj8R67htzAhv2vhHQVLXSqeN3gCXQ9K8ZXLRqSDq3TxyMGswGeGrWjmBrhujRfVBrxekj",
  "key21": "5gBNgXudCQWkfR9jzabqMGRmqfTuJdBKXS6b279r43L1W6L3gwNAFsTncjLFVHcJKBf6PCYmdf2iifAk525XdT1Q",
  "key22": "2RtPZCRm8mCT9Tqy4ayJKodyvj6MpUq1qmDzfDgn5eoNpuAk6xWFEhPukT2SzRQHXq7WLCdBUoiDT3FcYj88jNtg",
  "key23": "3ugKG5WjZTQG2UXqKsLZxdje2PZR2fJXoJ8adAAe3b6d3j9MAkCAUxe9LowpC2NoEVh5xpEiMX9LNKjjRyAV9Ao4",
  "key24": "3oXBy7Ntq1sW42sLjq12vH4gjTEYc1nMxZ7pBwMrrgTso4xM5eWzqEHW5z4S6Ecj6TyEEgdKrympJkDH9G1x1dKK",
  "key25": "4DXTm3CViTiqEpRfLWTEDLH1VMSH6459SF35k5bcWg8L86nw9rq6R8EncwrdNoMQurzK9jx29UknToDeNbMcrJCD",
  "key26": "ozYV41vZFRAhANyHe9cgAeVLk6DUwQLqFVpHPj1WQd2VAF1Gmw9hsnsuwytRu8y71LsHLeSEhUkeeJ9zjimmiH8",
  "key27": "5MNSCCwcghaVg1cFNU4RvJRRfQFS7ZZY2BMNiHuZ75v85GGUjtgyJ8B663DuEgsdahH21mnGhVB2wQpjTdYNDNvo",
  "key28": "4DkM2aFNMQgcr59vU17bvNYhZNmtdddqeR9ZRBFhXhL8WEaAS7riLgm79oHYcdH8jwSJ9W431AGDmy9fsGDSuznG",
  "key29": "36V8XEEb5i2bF1vF8QiwuAHs7tAmX4MymrbfCr3tziZnKM5XS7dbm6CNXfPxwon9Po6NMdzbf55nah74dKBFC93x",
  "key30": "5WWE1wNoMWLjCtXoKZUQ8gJMLhst6VvQTBo4wqPP8Nwnf7i5zAkwH654K6BKbqDVgcrAGj9o2xtev1SxoLSq4USx",
  "key31": "P69ZS9V9H8ssBudwy97M2XXxUGgJaRRv4Ca4Yz4hpKmrVofsUY1hAscZ4159YssiqLtr3bfq3QChyz2kdDttwN6",
  "key32": "2gsZ8NHy3nusFgHrZ41UjhxW1nEE4gGkbTLpEnhS1LbTscumCWRbLto524x5u8cCNpeTaspnjxoXE2KPVqH5rfTG",
  "key33": "hWEGd65LSEBNaom1JXho5BxAadiqgNmDWHYQHWPz8a9KoEH4AMBNJUMbzZNx884s46RJc2LZAWBMTa4BjVxkVzq",
  "key34": "3dWSzsTu9DRu3c7mHu1i8NFUkidCmrXWf7BKF8DiZW9Lkauc6rtgZi1eVPFUBuBLx3EavzVwuxLJefBat3C2LuXs",
  "key35": "2TRGuXdyuZkyBFUUUmqJwe6cVDSouPGD3HF1CkVGyopfEza248zvqxUJTa12TpA4yaMdFEqpnHkoJdKggT7xbEuG",
  "key36": "3VuUyCQCdoGZjB7muNoA1fPQpiyzQKf98H2qJgAwjupiVaJ2BYxwH8KsRkiPzUxkiMBNBRgKseBkRye9jAmoVvhD",
  "key37": "5ZDm8iV7VfbX3oiTXkrCVP6rDKQWqg55BoRSKK1dRQ6X9i3iHxmqau4pQ6QpmonLD5hnGVvTWW1UCsJsWovhHP9Q",
  "key38": "27icEUfV5c9hEYmySDRWSXJFWDjp7TP9rAre4CSFQjis117oy9H5ZEBZ61jMLCyPjSfL8xY2cEDzTKhLb5cNRdSC",
  "key39": "fQoAKKHNijXvy5AKX8G3s7ipT8to1LH9dDiaCibJJCmAHBC8Sfnu5Ua4aWotfTroZD7D95nAw9o81cvKj24Pfca",
  "key40": "RtQV2PzXHcoTEdaRmXm54NftRVNAy3vqLLa2eorLZwgFrxW8RYQoFPnZXyRtzq57QCms5i7SYbtji1BNbX2iZAE",
  "key41": "2fBmfTjxQfNX5vMeSRtLrP64AnfEiVVvmsLu2CAT6XMFZhu4UzNgdiVvTgA4FEARYN9eUQBMjyjBYtKKpj6aewfN",
  "key42": "5AxoY2X2xEdxhrDabJTGxie57T9UxqwjGuie5BHyZj7YW7cnC6HQbuBp8jScbJSwSvSaYXP8K3P5Mm6Lwsce9xwB"
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
