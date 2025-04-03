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
    "3w7vuTtUKsrH3BfFT2itsUTYET1NbSKmPTnNTNJyez8eZFbp9p8gwEdEv5QFiTm3ZqovtfEbnfWhc6msrEVzFJgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gT46bwUvZXTVKx1Qawpmkod4VEtGhtGqJqzeQAP73wkSmx9scDSG84h4oX3XwiboKfLDXRqUyeCXFWtWvPPYMAM",
  "key1": "Ry8r7CWESLzfHBXE7WbWWgem1RFWu6AP3eSSa4BqRd6UdkzP7Y7TeMu696rwwjkekeBdH29rA63P6ZyJNNyAZku",
  "key2": "5WzFEKtp8LoUpjmJqV1L34u4nmbNACUojw2e71JAAPut1JHQYYFmwDU6didZaLStbXDiBJ21iR6PvRKQBigFs62b",
  "key3": "24Xv5HPw5hECp5ALbbKugQ4BUY3UWWW3dT4RtVukgQJsrnoEfjH85LifwQgm7pqyZ9WsLLAMgaZPfU5j1SwVAQjJ",
  "key4": "vDi1afwycME3zP2h5FHxER2eBTD4axd1Fm34w3TFjQDmaCV5q6R6Nhgnu8a29VzDW2mCsSvJr3dTm1NNDwahsvq",
  "key5": "2Kkm8ktEnvuK7zpmMVHw9fFgAhqx7Aypy68L2u7hi2pBL3B2vHTFmiY76ZNbyWExdbzH7V6Y869NqPUgz4WFRhHk",
  "key6": "2EKxSnH4oYFXoBKwWoU1zTbtHj786YrdgFqvi7aB7b4cryDLQYXWqYDm59rw5sSTcynaHZiQVQL5UJpdNKBC6haM",
  "key7": "RjmLegKPR6M9Fra6ysoyGmgos6x4rXWJv6eP6NDu6AkdPZXAAAr7DiKic83ckE4YDtjUaULPknAyZUu4b5nDeLo",
  "key8": "2DkAvuXZpkD9jXqYpcuS8gMx8HyqYZV5y3jhXfUtoY98tDRaDUEMp1BAnixWRGTrn1xfDRn3PzUhgSdUd7J4VNLq",
  "key9": "2GWTHexNRPJWwKZfLhSxBCnLvzAx8r43K1SfTxsckBZhqTqiKt34zNtxjGoo66qBMKEs42GGGvwmRstzusvALiWj",
  "key10": "1TweFz5npzdzxH72QcsDvTPKt1eDgdJSiLfeDbjDVmvbhaAeTKUuLAo4t3JxQC4xtpa7YN2fnz9WgyqJQfBgwtf",
  "key11": "3v98LVGG5hg4VZMdR5fU66Yvo8tecezRzokN1KGb8vi8aAEiAsXUAZFK73zgQwAGg2dfAU3wVWXQxGkC7X3Ep1ga",
  "key12": "3y7ziX6fqEjjnouetRSJUgKGrxXECBjzZRsgWunVz7zCH3cANG4j5nkZ8LHiLD1rzgCc886oNdttCe9KfnDrgcpD",
  "key13": "2VBsVNxmTj6osNRn1Z4Y66ytRUcH8UzzLmWV3WJ1xJXmNcypp9qxGTSYRfLSSorjKHySv7QC9SwZNCwvPd6LnA12",
  "key14": "24ddRTwBpQ9AQ2GBMEWisMgttSX1dLkxvquw44yK3vZMVZ5obSPzxWMa89SVhwRFYpVnb8DRJgPQtHF9WR2gaXCD",
  "key15": "4sA2GH7Rdf2bAUsxnLqJXthHmqn8w3HSHN7uafHv4Bhc8BaueC6RsZWQnxgWBx3Ym6GNrZVeWcZKJvVMJn5vkV5H",
  "key16": "2ouqUV6gJ9v7oEXu99hCTcjUZHyVzBih3yf52pB1xTMntsBV2EFhNyMx6tmMSE8MWoGP2jo8FEuPBfsUrsEqmJM7",
  "key17": "55w8nRGFmQMBaUjUBwwUeCXfZimotmRs68nkBGKQ9yjtKFGhE9fWMP6Xms1WvoNNvTZCYRc4EfwDnCwYUZd4fFY8",
  "key18": "31HeC95zhVf3sT1svNqdXDWVVPRfpP4apwgWSNooUWnWiaFN9fL1mrorVuX9BRYZcH3ah3Re5TL8BAWGUa2S37Ru",
  "key19": "2Ne98t6xw7eLCVb9LsckEf6XKyJuUY6Mf1Yka5yhUsWKmvUNdRXhuv4swXLaLKe1Bcbci3ciDSMZrtdgDE2DY9qh",
  "key20": "3BcT8G48trkbpaZ4qUML3YML5JACuqGNaF1LL3fvtuarre3386ocpmdb3ZDXSMwXV5kNy1nLnQbFMQNLKARdXaAK",
  "key21": "33MTMDLqSs89oEvGXGhFWaAkKyQs3L2dNSddHHijoMBKYtKbYKif138Yne73njWENoUyody7kfofwMYgGCUksJip",
  "key22": "6182pkMRiypMDvk69WWibToBMSJtVrG6pZg5VnexWLix9Drc1pyNVTHNp68C9uaTcBpHTxYnVfHUtGd24G7VXidg",
  "key23": "5vDNdFm7erVmGrHvUGdZQL9MNJQKQZ1ChnvmDnp8wab3Kbojvdss7RTYHY3t9eJjjNXPJwvxCzVfFy92Qtf4fjVB",
  "key24": "1bNg9FwouGboseYphPu27e6KTPVG7zQbdKdgJ8RSCuHsaeYePP1S9jbYM8j9HQpcwy9oz8JC1ZcBTRW2F89iUw4",
  "key25": "3RHQtYAf1iQU1qAG2QB2TjgENRQQy281Fh2U1oPfRRehbiiSNCExmxJitVLcUieQ8q4vKhsgy6Ljix6T2DWoeiS",
  "key26": "4eTb44FDKXDsm9cxufscLqvC8GXDdXviyse1adkKxoEbLRJRWwBigjiADHNzyc8Z7CoyjRfbhYxzhJb9ZY2tpoLx",
  "key27": "3FuwnFssVy1n6hW3pKvdJVhZb2a7yFHUrSYS4UiKnYfUwsCWFNVBSMjtPx5fUFgyUNbbZF91hSzQkUBdZWE3tPDe",
  "key28": "4FWXN2jtbsjo36PDVJZYda9WxX5uDzoqkbsYrLgWs1zD8ib37W9gQXkBMWQJ5EmQKVVcDtXYykTg1xMBDd6Hix9w",
  "key29": "2g5G9kmvQaS5AALNJrET8iWAMUxZt63MtGmuXyzmypuRpMwugGrYATi6xfUkouhQwq3MKhpYVbUaLvnJpP8fbVnk",
  "key30": "2GRmNGoGkq7S45jrKFVBxoTimMdXEQekv1GeXZ2Kv7MByb6JC2TeMNZwgQPU1SKnPiABKZDXheM4PgayAMZqmySN",
  "key31": "3mCkSFq85GuUqot1U5Ajd5DJv6KifJ6fZDFBu6kPZjLP6mV4CLmXo2YLAXYAr9DTCtLGv6v4TrTbyknZaDQaMFbW",
  "key32": "2TU5ZBXLGLrLo2gZiaqkstTfP1XdUTKJyGPWKS8QJkspP6B9dCZ6m1QzvEpHEL8oWefqvD6TYANhsn2mrbbzcFuw",
  "key33": "5KJEm2AYFHzjRXKSELb6YFhZfREH7ZPZRCMd1nQtjFK55X8fUb8JDvjshcvSnPhpb1doKLLhRuXPHKH7LzBW1pCD",
  "key34": "4fQDfT425JbdcH5BoS2SuJ4ykNzHCWXTvv6EPiAVmEcpN4fY632rD6dQbwyuUz7cFvS7RxuYf9BBEDpAhMpCXDQg",
  "key35": "3XDPFG5kj99PUbuNqLva6UgcEKvHnBd9ZsWppjtVpLVpcCmbM4ATAxk3v4G2QxGEvgpGwNuZEg6GkwPyVvEPdaUa",
  "key36": "5CT54442uyR45C3nCExaT3KYdfxE3aGaaWVyfuczfZUpCYWxFdQG89Sb5xk9pMvQfX3uqL1v1CivqfccfrgqH7o8"
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
