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
    "26NerdZyydiPMeMJrRTUC3iPR2bykenjycjeMDPRpFoeR6h7fuDnLikj4VZFeAZZvj9pLCR4pRG58jYkaNt6Kgiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kdhiLbp5btQowvA9tkEusrDTyD1ALV3K8ksHNv9s7DCB7esXPpWscgefW96XrQ1MbiDegHM9vp5ox6ivuJRhBka",
  "key1": "3bLesWKnxfCbMQ2oaApHBe6EQ6rchgvHKFzdtS9dC9Jbvg1mEUNAY489xEjwEQHiA8Hpu1dhocXFPNY7zt9wT6U3",
  "key2": "39eiZoru9z7FAS9aov8Hf1S5SQQ6TgMwzUkTbvbP1f7dJYZjU8UFa8gZgkF8gfXMJXNFpgUDtSE1J3rh9TrwbNfi",
  "key3": "2KpXMoBke7dKXLgVj91m2Pu7BATpJNete9g53LJTooZgqG2fj6iYrcFjBn81Zri4rwXFrzsiDzrvfGDefvP65jCE",
  "key4": "2GWs7Y2RHWykG96qfshVoQCJBwg4RDDcTwq5n2qWVmieALsKESSdgfKmE74d1WYHxR3XKNsNjcYRAeH7Hk7nGAL3",
  "key5": "2YBhQRfYSWfPyAGWB5FtHomSk9uQN4exYrETumT51zsU5oYDVhfed4d57KEyypMqjXsZM5waGpXbk2ZmL6ETtft9",
  "key6": "4R84PkxXdwSCgmJUSfpXk7aKpi7JxXBDNaWTYWszdWqtjZ2HaiZoapUAzsUkLJ1qMVrFYKSsVSNC56GXc5PjZBaz",
  "key7": "482ArJCt7tNZRM8UmjbZRs4PeS9Dy1foq9JzSwo8T8xLm4Q7vx7KZ6fokuAmvfiWvpj1vAwwLRDsToHZ49dydg3z",
  "key8": "2hbLxv6kuXYyN3ySGGgBKyjbVMZ8gFdgToSopFUXeTdvtv5VesoMEqkELspTmuqa9TwWTeLpb5MmWX6MFg5NmLmL",
  "key9": "LRMWPUKm81dFY722GkVHcc5zTNWzUqT4hMMKh8qrgCtvnCPfnpXvWLCFncFbvXYa1xTLGTpnNgJ32NCJYPUTM4r",
  "key10": "2feEk5juLZwrtgr4qKgJhf4S25m8fFXqHxj7seEbFcMJ7uEkwT5aiHdWkDGjmkbxskbftPfjrQuLhZvgpfSo7RVF",
  "key11": "5pFRXFtJFpyHKkJ11ABECyjQdd48WGkxL7pwZgS1wYHPrpkFmamwSmJ6YSY5PMvu36uYuh5Yx3M9TFMuYFUQymhD",
  "key12": "5saY6ZSfpJfT6br5kTShxEr1v5YvyBq83XBj7xUEe24VX3gX791eATYhUGbnN6YS1hPw9z8SHVLfHVYWeibx8qJ9",
  "key13": "HY7ubG8qfoyWMK9GEqMiBm1Rm327NZCrS5t1HAidyFDMqoAPVhYwEXwaFQgijHeGfu4YDR6mMHHFV8jusa1gAQq",
  "key14": "5uhRhSwdCDNKZiR2m2QWModJ8AC8mg3Lcdn8XQZYNd92ztb9VohnbTazEsDFMSfbcpTQ2rzb3qCfDxFcrhTihJ2K",
  "key15": "5zK6p2SvcAYVGfkWSn6pTTVNK1oqesZyGtJwWznXoCpNuPEGmGEUa1wqKMijPkqKBX6yC3SX6LdrhPHKCAbkYj9F",
  "key16": "uzpinZFn1mqXCW4vDhMwtscC5LTAM9cLnhsDwKuv8WGGRy2tEToUoHgwvH5EZdWw6vMjPgQw1bHpHxte4SGPFQy",
  "key17": "3eYnZfn8T1Md6zz8TyQaWFN85NEgqFVUS1szt8tEK9JAZCnSW1UbJvvCydt3BcqHXkFpDtv819Nwj4y3LsYRa2ZW",
  "key18": "53yy9GPtvVCVwR6HtJsuXFkEeAgmAxd3p2mzgH2hoeSrdBhninw3Am6D82Cxt2uLaBek7Je5W3c246nudqjaWNb",
  "key19": "3vzhh5S5ZF6TStkQfPov9anmKbH8LH2vxMMg1rg9DQXNw1RwzCarMYaWduKjtMPPvdQTrTX8XLSCwT2W3fA2sW5U",
  "key20": "4Mwj6vgvMXi7hmAUsoSCPTjSoZ1bZKx622Bhwo595UfygR9CfdivuCJbHHNb24G6FVUwrxh7nf3MNYHz1rAHubiG",
  "key21": "353QF9aR9H52yePVqrtrFbHrbb8CpYeXGT85px8e4YQszMzwFt2JS7K8bWASeL4TowQwECVMdZECXzzwpQprJQcd",
  "key22": "4CXgp4JeLacNrq1GRRvRaty5GwrLCrJe8Y88voPxZnxQ62et8GCxXVvfDfkjCpaH8EEhEV6foLh5bfUmFFCTTWVK",
  "key23": "4BBwXYvncki6mVyHeiZQYfVx53tEx3qibZHq8U198n85nPcRfXkSWFVK3gjgaoB2KyQeZX5r8Cs8ktKa1vF8HEjm",
  "key24": "3FyzwxE84HnexDVWALsKY5DJTd6hCj5Hs7nT7duVdzf7yEAfBJ2EXXGuWrNoGurGBxxsUc3FjXrcRr7cFn4ad3Ws",
  "key25": "9YcVtzfVk8nk5hdRsT4DiJA6uN6HMR5jYoG55NNEoZBvy8PrpBsMnVSmh9BwPNkrKratngZXfGT3G5ZrPzR2w9j",
  "key26": "2UfXpganbWvcg1cwrpUDS8YJ6zbF5pgRY2qHN1GWsnZTgSLLvM1dNqoCs1jVrWfmGEZdV8PNpo15GSN2DH5skWj6",
  "key27": "3b1mF2EsZyQgLrgkSmvYLxeT97DZX4vrtZbi78cPFpV46aAB1JqzWB6uygN2QgrsX1Sso8LZDQzQ8M8vYmbjty16",
  "key28": "onhAk3pHmuqgb8iyxq64r3SigSfa8zPjKqKnwBbTSXksW985CoAeVoDS8R1HSizybumBeGeCnPTQGEnozMknbS5",
  "key29": "3dyCsFYv1rEyRs5huJTbYzhEiUNhHGdRqhdBCFHGztLmDjsJofKtVwQkJR4izSfVwYDSv8kBp38VR9R4qYQeCQ5T",
  "key30": "2u3NgHC4Qvqurgtaf224MT6FD3xYo49aAWjTDU17ehdQacT8CFy7uRPBAh5NdhzGX3rrkYBmkLRQhWCVAiy7VZFn",
  "key31": "5x73icBLVkZAWTrBXp63JzemsAsLvpDPbdqqVsaoQFYmJPuWgKy7rYaZn9MdE6k8nC6ayZgsmtoTVtHVXiMUY4EZ",
  "key32": "2mAmWnyvga5H9y4PqFmpSjpx368HcAgrSsw3YW6yiUUy5CWF4sRqzQ5KN6grooCiqojGGkQAKtXf6YUwuJUjnSPT",
  "key33": "4ZY8bsegqEZ1DxKAs7e2iReGa1UHK5hMNxhoQtWFMEqp9uU5Cw8tSMBs4z8nFed6mNXEhVGGN9jYbmc2Mew9KPbh",
  "key34": "4qNdDtxYhkx7meXJxN3neJJai2hwZTKxiL4vnhdPW7ainuJ6TghrU7TuUvwcfEFsVCsUGvPPwpUVTiAnuKGFUq2f",
  "key35": "5XAhhUCsHBZXVDcP1CRgy9j59wMFFRmN2XawqogKJEbSSnDjokXQ7hAaDHpBQdx2FQAWfCRMvYn9cS98RtVxCWpK",
  "key36": "5FJv4KL7dB5kAH6LCecewn4wEghP2PEfKFMPBaXPdmmJhMpHyxXRJZiBB7ti43pBMi7uN4ZSQogoYzfmUuS4HD7X",
  "key37": "5mESZNgPHnnGaFriBBAnw5ZgRDqFTKbpTk2tWN47t1FkzSd77DiBgMSYHrhfNjeVY8yKdjt97xd6wuStNqMxcb1o",
  "key38": "2oZQe4p8rWYgS6944fBdHA5pjc6wm9KaWPe3uA7cnX9FUWTtbFjNsp2x4DFUJUczqBCwsmQx1p3QWtxBmHm4uGZZ",
  "key39": "3GJ1bY7VUzKk87WB94c68BrT3ifDZ5Uvakixw32nyPeRkZpgwtut15uJFejKmY55jCcTG4uUCbAZjWmSti2vBw3W",
  "key40": "2TcqQNCX91ySmg8btUSPSQimwQ6nLoWUYmkeKrmwwozUtmUDgirmERqfDBjZ8W8viNFnYAED3tsFuCt1qGUFLNTm",
  "key41": "38BrnjauGqzA7qQC14CitV6CLGoGpcKRhg8K7tD5oLPf4hG9ukPXc2iVyPadfu5YqeV5Jo5da918WQCSXxFYYzn5",
  "key42": "7HSCQvEUdLtAUnt396LyiNwGG5LbrSera9q82gNqgxCgsZ7AjPRRUtj7E7xX41RMn9BE8S78y4nLDwHJ24a5M4b"
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
