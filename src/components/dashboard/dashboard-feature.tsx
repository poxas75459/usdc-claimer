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
    "5BQpUFYegqXurQQP7E7g5bo9ibh2J5XupHZvduc96dcNHwsNmTUNEXMZGsBvmmpy5WM5ydTUFxxo3AjfiwTfyBQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n8QC81MJWbiAdiWh71Dk72uYnF1kzcpj6gCFeUfBfRmiixQadsEfSsueSuRFWpKJA6K8P9cBMQfHdCU1n3JuWhk",
  "key1": "KYkD78eLM2A18pfg37jJ5BtoiANKtvPavnDhWnAJBZDVh65HRbRcC1NS76UY3snhqfgF9Tb7Sv4fPxqATnp9a4A",
  "key2": "3xPEZxtj3ypEwfsrKmpQPMPK8zvPf2KSjawJYMvd4eKVrnRCdbbi24ttqjuHfjVTkFodTC11cW7Kp3t5PXxP6MyP",
  "key3": "t7B9C3j2wrApMVEfXgsqWCRarNhD6eyZXyh4QWFJnPw3wyxrNpkMAqFKp4BcWrfxjqvpoBJv4WwSr885izzikQP",
  "key4": "356Wcy9tdppugg8ycYBf4v7qn7MGAJwMocitNkJn3pUPssXfeqAq8jQYZRQHMhmPySod822q3W94st9ZBw7rJtHT",
  "key5": "3TnWRnN3Ee9qUhxWw8ashWTNHQuVTX7B1t6zZzb7nHmhiWWrJLwuBbW7pxWAo4E9RKDPjQk69zGSJM9Sx4CkUwhb",
  "key6": "4R9x3ts6FpiZJ4omoaykvNtHZ1XQ8X6ECcD9E8xNNV2btyXiBjKhsweZFWL8Rd5dES7E2sXtAa2g6E3VDQyHV7VY",
  "key7": "47TUDTqAtDX49mwin5RMceA11FWoEoQoagLNKfUCPCNt4DhHiPDSk9bsvCCWCeGtRrybLeYvwgikBhqq5YWtKETG",
  "key8": "4VBJzSqYbXRxBU1fTbcmiGu7kXps1YP2C2fa35w4ZgCTXSdtGuVMAgVeVT1R5QTvCD4dSg3xpyAVPaqfiH9X9j9a",
  "key9": "3xUve8d77bo1jenzLpHK3yz6kKh8K6b9rCtiXkjk6ZzV1whdsu9dBcwMTYQKB3qTt8hFpJ7vTwxPa5egifSqQE5r",
  "key10": "dGFszDEZdTucs8BKVYwvwkPZgWvJa3mkhDbj1GeQbLQ55ogRN8GKTPjR2ibBQdeiXj63gBhmxyV3eaDZo1vWQLv",
  "key11": "5WYGLJLfw59jZVJ6Qkt2a4UnLpQGddzafTm1MdJ8dXJmy6uVB4ZikbeMLfZ1Bd5JGyCNaGhviND3yTMmDAnQpRpk",
  "key12": "4ghPFSvydQfYNxcqF7MEre74zYCuj3DW42prp3EsdfCmfU7hy47u9Vs3Frz45s55hRkkqy7Jm9MsZKTJfefnhB7f",
  "key13": "T6Cv9Jat2hLjD9zgzUAYYtHFSKDMxnk32ync7Ly36f81M85S7P8LeTec6kAqcg4KJbESsFDLg6CPW9qmNBhzHgD",
  "key14": "QZFYsbhc4DTQmcxBRBV4uCxFNy63KGv74wWJ9tbmVDiGPL6s5oiZPpofnnYRg8mx5UBspxnS17s5ZyWRMwGQ1ma",
  "key15": "41emwCpks59PoNz1RqQTd8TdhvD4uJuDRSAdXh3AwBd1HJ9EJGWeuaDkCUUogBBaQU5aAgUro5tAfesSb2DzHNC5",
  "key16": "4FPapULZ25fqSqLVRLgDqYfLPmbt4x6MD2No11CnTnZ45hwVNovmd8kSyB52RTvdCq3r4zM71aP7k7RqqHH7iCaN",
  "key17": "2UCeNXGgH9DcvLyivXCHYihnB3PQsmYWNTSKPiPn2xkcL2mPJDbd3WK5PRSTk4Zyw2gEZtmUot8NQvfMWP7Dtaq",
  "key18": "5J71dhqKwQYMxBX1tWkF4M5xwLjixHoPoPBnDS5f9aWWHF9266Smp7QnkVLXbwwjggcfMx8dBxzCekHUVaVtwwJg",
  "key19": "3ZLomfLLCrSnfi9Pgwe3npB2J1q7bhqZGbr8g8ee348GHLypXLvp7ghPiFEKGefzC5XNWcyFQSK1VN946ScgtHWn",
  "key20": "SfEwfgmtLr6MJLiw7nxBsUN18V6ee5vxBGX8cyeREjPtiiPVXXksYcsLGKpnA6QXrMdwcHUkf74sv6y6MsnhVFN",
  "key21": "3wU9qVqDBUWumUN9x34FnohULverjeGTd3k9dJbU6TVtTXLNWg1qXJg1hwPjCnx1zKuABUtvpFgWUwWTNy3MZ6zt",
  "key22": "5gTsxGagteAprVg8RTSkyEcec4m9XRNwu7bRyKJ9T3JWRqtYKFoFnVWjNmFoSPX2PMcVyadEEAyN7p6NL6xESDph",
  "key23": "2ydACt5Kww2zcPESD3THWghFYcMpKfYmfz6qnYKLVnubqdo7C2JZzMnkranoLCd7QoEyDtNAwNFvoCqYMGauDV43",
  "key24": "tMSwCGnKfeMTxoLGZGRMxBsnpDHKPdJgDZdnLNycSuUnt3h9WmbJJambeMmoGawJ199wove8kCfR7ScVeKW1Dbk",
  "key25": "3yXDyFfPGTdPfKyUB5rB7jpcEhAsMy9jDUTW4XiLysS3N8xPyEHa3AMH2AvdESzbcQKxPBt32GU7bpNbfU29YY5U",
  "key26": "JpgFZwqheq58X4sTSRAwBFWYVatT3aVU4z79XpvTVjAT5xzah24F9YPNKad7JcDuPYgR1BMe73F3LAvGdWgrKRL",
  "key27": "v7C9BfdLEZmsF6o6AHX36Kc4qjv7inwxtqu5G95zNibLMDRyRvKkJphH2EipZMbVcPWxx4XhD7QJyCdCcY55qEt",
  "key28": "5JLftczDuVNpLdaG16RgoJxfhEAedGB926m6d2CijwQahZdgJK6bKGeHm6esRn9KnFfUfwTF9Q3GSmkoB4gtnpP1",
  "key29": "2sj6VZkuT6bCgWshhCofdLq4vqNxuBxzt1Gxs75jfDNiaUB6itRzDkXGanAfN4yzkzrciVxEEDWEBe1JxL1Hh7Yd",
  "key30": "3cgTMW9UwbvzaScxK3uqKD2fZK5X28K8xer1g6Rty48HozXd2tSSvVTKpBFujzSndPJmBBH6XpAnL2mzM7DgwvQJ",
  "key31": "2gTWE5U4XsETJgHh78atEqYG4F4TwS7yk2WyP499maGRMeERYJBBbSPHyx1tcGtRrSeGV8YWDcffY3CkDry1NGb3",
  "key32": "2cGqz1oqGPMK3B9GFhzt66yweMwxDJkXDwKdSUhMDJ5DVu6oYDKUwrsnmXqWmyZ54Bx1wZFaLeqFFFhsajarhes9",
  "key33": "4FsFwqwDjREzHb8MGSXXsiGbSgjpVkewEkd1qQtciGRAbfbyv32retrxBTckDuu2CPZLuGhoME6NYcA4p3NAs2SB",
  "key34": "5gdE6zcb5mEZQRyUJvUX9XAyfiWxcSoovD3YR9p6ectHrmHmjtZzrhmjBDt6cqrUyv1Ap4ZSqymPeeyZ8ncyVQHd",
  "key35": "25cRTSSYp8KKysuGRupHt5Q36W4oJgLdAAc9rYm6ZrS51c4md2NborhTuKrEcq2x82f5LC3jiuHJAaPocwrRdfBA",
  "key36": "2aVKhimuyTQk7admPASzFGBm1oC68Sb8hJ646zvg1FNH1eHZnA2KsrRr17JFfxoC9ZMkAv1xVasjNyP1zB3Rnie",
  "key37": "42nkonGpLYZS4zQFsVogogQugZrregyrAJWZYKjjC3RgYphARqWgR1FVs2jnwgdeGzYHQ3xCwsJ65VRzyhGZ7ctP",
  "key38": "3eowYkMyrwmqiYQK6BAaLCzn4NpC8YRm6SjNXhpujLrzfXqzb4tWoMsSsgUqc11XfBb2kHqzqioMLFzX1pywd5RW",
  "key39": "2GfJiEmn1amTAKDPZCYA85sCLNLJoxP7guTKqu972RZnrjZgFGaVPqEP1W4gYWxjgDn8o2Jc7vT8pe5KUPQpojRx",
  "key40": "3kC8d8ykPfJiXwFQT5coc4VQAZHLv8NahU3ksWZXFSxxLRwYXLKrYyB5DQPcyEM2VraimquJWVk9mvmWc7YqBz6H",
  "key41": "2euwVtCiToze5cSNNYQnMmkvew7NfMh8Dniq85X9TE2ZxcXdLiGKiWosZzCe2caFivxAd8dLb1SDDwc5pSMAFn3g"
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
