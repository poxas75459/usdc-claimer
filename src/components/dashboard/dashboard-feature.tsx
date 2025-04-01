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
    "4VuAexE96FoX9H2RzzX8ogVxhB7ZngkuW1ZKiap35pkiUVPQQjQHdgGRrm8v64t72GCyz94haYdwbGURMVGCCeJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nz8qQrm9bKdsZN8iDqo4pjMGNQ96343DJKVsDwUWomebymG1TMynuxLgmPFu1xDgswT2o7AuttaA8bZ2yFTD8T1",
  "key1": "3dxtKevCdp5h4RBEvtYhJPcRSYpeuQpuUHf1meQooBSoLEwxP7pGKGYCsFC87nMX5joD1NcVhV1XWcHnWcsJjCwE",
  "key2": "3kouHunqwt159iC4VUHqxG4CxKhgiCKstqgbAXjkuHEC3i34Hk57UFW8fEiXSDUgHUyEJf3CgZZLu1TVMerCrzBL",
  "key3": "eT2aLU6HJ641KHgDXnEDgULTmDMcBjcNuCXoUmY7NktUTDddFHyE3DYEHp1mX4DxWW1kidYc49pm5g7iCP4Ro7Q",
  "key4": "Q5m24VpiztFoxJkDgpU5pAscmt17AsnxFFWH4adPJkd9tUH1Wye96iwUf8PyLP47b2nGSX8SkLJBEp88oMxVbEf",
  "key5": "3tm8J8LLbDwmYxMXq6dGLwJYQkbJnYc2PyncGCq5EtwFMgnKi91oFx2XaFbihB2rrqwatnUn74Q69t3St3Y2eYDG",
  "key6": "hQjKEunKjHvNHux83qfAJpeVSBkvH3fR2u4GVRKH3RJBcafXz9gJ6ZNExFab8Fov1Jykz71cDChGx1rHfMM3aGN",
  "key7": "5zPMwQVAFKtRfPJbciQYxPaj52QL1qQ5VdqMCBhAT1HE1tatoBGpQMWWjZK46eLtGMm4i8E6Z4g9LpDjMTfTi32B",
  "key8": "61GyqqhbNwA3sL6irSZGaJp63tjRN9Z2o6S2Z1S1uWw9mYtd2faMYJWz9AhfvA3H3RasoMnNkKxoqeKG5Z5uBuho",
  "key9": "2Zm2zPEzZ2jeJAnxuhK6sUzDhxYjo7hFvhZTaxo7M3GhnRVfbpHbAhf642RY23VFzK27GtTvXz7Y93BQ1EZZeQC5",
  "key10": "5jPx39foo2uLBzEusb9u6oqB56VQmNaMX3meTrXbSvAMCh657pdSB1fZyz7VTVdsbjanBJtBaYnFAPxtESeoX7xK",
  "key11": "4FTcUT5GHj3yuTeV79EpCVH4wfJy37sHZh4agUEVoTbyUu88T2KJz7GVrqv6XTy1KERe82t87nwUrSg1hicqz2f8",
  "key12": "Wp5vSifnVURQbRdTx9rnb8t4g9JfD7TyzdaefGsyAM3pPiK2spLcHQc2eebDPB8SCE365jFvrqu7kiSnhzw8tAh",
  "key13": "3xXZAhpEEUSzcr3Sav6jkHM86gvtLVNW2LEDo5bskFBW1V1LN6oTzQfTpsSdwFo1n62rbDd6WT84Xs2nGehiKuhn",
  "key14": "2vMNGFaEVMg8xXBqbCZALBwpD9WzvziVDWPkZVJc7rqpzW9AUrzqm1dcb93xez3oXrxnEkCuVdobDKuga8EVNhmR",
  "key15": "4EhGS1iLwjwHBx84yehPnZXDL1AZPPBxBAPiAfAGHH3h9qasPwSS4fDW1ZCN3wyTvZdrVEGwUty1qKktR6TSCHHF",
  "key16": "3NjcN86np1DKUUqN9KZu5GZyz6Aqa3AdBngjJWk1a6buAhsj8rpkzVDr4PZBZHwCTPjiZQEHHEont7oEcHazGMBe",
  "key17": "2g4x5WwcWVn7EKL6SgQKAuRtnZ2bKAZQfqWKCKr5h11TvRBTSAXkre98KpT13RVMVzs9SG1Xhe8ubpkQpBEn6pEK",
  "key18": "5FoVNctM4CbeH8K2mG7FF7VcKcVcVEqTn1UKYcWbQafmyzsAZA4socEMUTkSVyvXCWjLp6988hBJTrxiAGaMm4aN",
  "key19": "TJA1RYqjj33CnB2qXCZx4jhiRErcL35QsVBqAztVBAS3GzKHqgbbAFScLNCVSB7VCQWLP3QR5USfATeyeSL5xkE",
  "key20": "34zqFMzCq4tHkjgFgj5vGTC5iHWNBZW7JPd3huUjX6Lmcy5dr9ymGhL3sxeNCDAwvDPf9QHnjD3G21pAZiST4hqm",
  "key21": "4YEnK2CifiuehmjZ9opcDJvDKf6TMkQ8SMhXFZGzjBegVGXpFC6pgQWLSvuJ5LDusZbyGENEi3T7VtMS1zFE9GRu",
  "key22": "4e3YYh5cXQvh2RGvbzNZtusmyfNMwmmctmCxpVQ2cU6cUj3MZbeW1QR7fdeQgv3Nu96pfkit1RkrF1cnxKp4DNWG",
  "key23": "37gwexVMQp6bHkKaN16xkanb92yi7gCawE9pqVvdPHGCFxjKj4r5X5kjw6gkF7iexCy7ArVW72rJePqkbVveFh8c",
  "key24": "4Wgfpw7mGRku8zm7yY5ceYYThJpEcgAt8N71K3zUejQzi4CZaP8LSeFYPizdZKTsrxR2haRAQ9yYNxHMvqCYa4Lm",
  "key25": "2d3Xpf3hwTAN8QmkMa5wohJecd92tpMe1bddW8x4VQ873gTzemNs79syhQ2nLi7DSCuUfiBm218un6zDckwdP5k5",
  "key26": "2Skxr9fpwy1GArYpvNCyeXfaUkMRm1X2NVAiSF8oAHFbFBGe8vXFC4ywFh7Kc4PNxz7ATEHNVRDfs2WS3YiGwzpK",
  "key27": "4jzC8kGNpgfzUF3ZJFxG8gTqf2acosCySZYa5j4QNFrwP7HyhwNqMtoXtsEpNSjmmwTiGYcyzBFUdMic2HhEAVpP",
  "key28": "4UwhnjQTxDrnE8ACErxqttF8Gk6z76cejJak4rKdKxHFZd8ZGpFZtsrHR986Excf1CNu9ZBzGDynojU6gPQ3Tz1d",
  "key29": "5pxxEoeH52NVXQAx8uHJp2wjXFHWjkroof2udTYti7r7YGiuWZ7F59P1v7kdUYtpxYytNBVGmVhmqmaB94fymuwy",
  "key30": "ZM3oqdHWnD5dtt5FDi94ak3axRrdXwJBNQLhM9hrpsnU4ADHwBnEvYyzuK8uvNaGB8GKJ9bXC5E242YcnygT4Nb",
  "key31": "3cTxVynemZjw52dxViAX6aTRzgf8WNUEFVM7f4mELzxC9hdf4iikEpTFZvLjEscjUXJpVZsjgbWWynAdJL7S6sCe",
  "key32": "2kH7By8mLsJjjyD1gfQ6bN46S187wVKHFVVGzDvfmQsc9aE2SQj4cYM7NojqjBsrw2urKfnWba8qa5tdViNuiVXZ",
  "key33": "3owKtB2HqXPvz65eKqyK57SztYkdcqkDUgAxKrUvomc9PbuMppAsvS3unEh3Jav3qR8s9yNsttdtnr9cSm7khzsE",
  "key34": "3AZSyDw7G1avhRgHQBsY1dkXefh3Aa7SnxbGbvJVn28QLmQXF1FuBxnSxnzhyXk1eS6kgdCQ2tFg6FXQRiv4iFjt",
  "key35": "5MQtwzZwzyN6CFDLMFF9UmuE9sX9VE1faWJ9K1Wcp7GV48UnsRszEgSPCkfYeXTdccnDmyU8agXnuVh7JzsgQFYc",
  "key36": "YN9KM3RKAvTRoFq97hvBSHNkebrNmP2hSmFqFg3ZhuR9zcvyhEiUKxPXvfdcaD2pKnebfsB7TRGwis4bvkwv5HJ",
  "key37": "uMFjZFGwQt4ofSQKuB8cUTFZgcDvpG1ExGJmrvmkn3gTLdxNk3iQ1dAXppqiauKgX8dpb5dU3wuyVj1CHxS1PY3",
  "key38": "25UoKBkrMoUuJ2muafhcbgTRPYZLaZGuAFr46UhocPPqDV5WxwHKvGcHVESBqmVrZ4bMfH7zZ7waMoDhkKbDwvHJ",
  "key39": "2RZSd1DS9QDyVuxPJWBkzo6Nax1vyE9EbCMVV8kyGBm3oN8stPQbY98z72RRxZ6XmuPNsZHAAwrVx5uedB6c9vBK",
  "key40": "6sP7k2m2SLmU5Up9XWVBzZqDnmitSkvEvovq1iBfb7jgZxMWmXeqWcEvebchZBVq3NLkxbwLtwuDR2HZmjAEwMg",
  "key41": "3DkqviJXoLiEhYwq8w2BRAT61VzfYK5gEXaYb9VCnpLic1CormGiyzL28Fr1BKgSt3NTLjBHZB5dWwSxPEdFJTXP",
  "key42": "4fs6p62rMQNYLZ1mRjeWcnCoET4BRmAtaTvMYUBUB1Ef2gRYYhSEkwJth1LdLCSzKo23M6rFVi2apx7HrwdhDzfk",
  "key43": "2r5e7DMEpdTa4uwRsfYzQqhLoApftNfb2KKLV5SuWbGBE4YjGmZo3kSVBZ9NrAPLSbb1zeqhU8AWA1ttq8MA4RrA",
  "key44": "3bXcshLD2fvCpFFgELJcPbySuynqLQxS2ZNP2bysQctmU6cA3EZE2Bbuzo58YjCgKZhZPEFsq6utGF1GNGuxYxWT",
  "key45": "34pv2jUZEJK2rtVKgNmQQVisyxnEACPqmGUZhQs947RGUFt1xa97uBL3ap9adjtQFtu7YKFqgwds1WrpyRU6Cohz",
  "key46": "5hgZg91nNfDHs7nxGRx2PwCvG8cs6xU7VGT13iAdXFZkL4y4aScRJwWnqwNEwrackdVmqHX1DEHG1AbKf52xTXPP",
  "key47": "44u5eTUPWgufNx3HXGJNSCFi9a2U1fM7RamTF1eM7dKhV7RaPzFLP1G6sfHXoDiVTChtBeNWtLT8yt4FY2hWUUeB"
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
