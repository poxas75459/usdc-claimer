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
    "351fhF8kqruJuiTrmF149HvTae5u2oXnYR9TBqMa7rjwLNqw2nPa8Fo43G4P6GHSYBYCVhWZwSKhxxGWwJz6g7ib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Baw3T9Vrpv9xEd9aXukZHRjQ7SV8FbtBNbVncKJ6qzkCc1b5st6GgKpav6NWxiTqZw5WEbn9iCDX2Pe87UTGiot",
  "key1": "62cTSeinpLDiVfGN7aZ689TgzBiktDpzkUZRSSSvCLX3aDe6dzw79hAJDZY6nE2EgEKdd417QpoBV6eFRq11GA2t",
  "key2": "45UDuWMCwMGVUq479iTsXgZix9ybD8Gd6NTm16xUAR8uRxbTkX1EhffNdvRGwo8y8NwHChHQqPa6jkR4snzMkWzf",
  "key3": "eNwfwF1k18gZwAYHZZi2ZkdbTX3aBedQHT9jZgi8SqxSYtEcZxDP7QokEqJjdkL9jQKggXiKFpGMxMPjpVv447n",
  "key4": "2oDViiZsUC1u6cmSyVpq5CZaMo9NRX25s7q2GmCnibx6dEZaUMPgUXmwHSQtJsiNLgiazar6Y7Mk2PQxvv9cZL9m",
  "key5": "mSjS8aSnxfUX9iJg9hV9NdMgXWNiDe9bQgxXswWGiC1AFMwXXbyKaYeSDp6A5kuiXv626VUmJUMPm6Yjw11GXXU",
  "key6": "7mMm4ub8WdD86uLhevT2kzrifR6vxhtgAb1MstnbUaaVfC3grubfcBeQ7HLTNhUs8sMarwRfH8nJcXiGp3Bfxvm",
  "key7": "3WRssARJJ4u3GzdL3wUtq4SUUhqGo5Zo28SVBfRsHrUVaS8bbTcphDTkUPyqutaUuw8J4gcQtUneH2RmrrjJgSGa",
  "key8": "2ifs9wX1yRyEdevAfGifMBCAhCMshdsSf9JuqggHzHLe8Eg1Wt7AkhytJMDud75mLWVi1yzmZUVmYAYCsY7SK8Af",
  "key9": "wkMtgXfsWiW6Lf4pFjDpF3miLYm2F7AGbs6gxE2Hy5yJnMoopTX8Gm617t8WGBghwr8aXJEiaMPZSqnsfzFYBdU",
  "key10": "5EDdNiT13zDiESJaVWS45zN4B44PcbtZSerqkcFHxfAz84Ptf474C6HbvMe5KX6pEfMq9hjrsFT3dLp67DoiDPE1",
  "key11": "55C31oEuGvqSNTZ85D9XtYZ3ssF4ssFk9btAJWSgN2weibJCAVXBLs7PZQbsvUHiKzB77e1dR2N3gPJXmjStL6fP",
  "key12": "2B4VtdAu6mJ5hp1iCEzzRj2UmTT41wn83kneGrfbrNJBLNHmsV96jXY9BcS257VYisL9J948Bcu1F81oGYsRXneL",
  "key13": "3ggMdqZVaXAuszHbHTH9dfqqxCwY5cJ2uh7crPF1LM68Xy1Fz5k3uCyVTiHVYHLfURo8VicVuXhEuHUYga2RacAg",
  "key14": "4w1uCfPweMejF4XgihSNsGEe5WbWs2C9Yrhx5w93oZZhyfrAC787AxZi12rzQajrnVqq3x3MQWAYjQUmXZhD4E9n",
  "key15": "3TBaDfpsZ5cELFPrqvmC1p2pk8aiUMf68gu3TMdPdy7AjKs1NJVqWzws5yCEct3s8cTcK4esErBsP86tx9L9aG6f",
  "key16": "2uLFQpFaNZ5bho38jgS3SRhgR7efNDtR5oLHpvp5zT72W6LAHSeoHaQY4ehfMcgZXT3jRwdSk7FVnJf4VY2wvPXo",
  "key17": "2g19ZrKmS8fJ2cTWmxT8H6eWjVJ1xBY2JTdq4vDJM9QbzKGoV84S3GyLtVUoUrJZYWWMbpPceJqeYc4hbgQBAorz",
  "key18": "3v2TnLVtu7vkFL9U7Khn6yqj8Hik6Y6MWqBZvz1NeVzQyCFEaxh1dGSaQoc4x5m9Kd8iZ3U7pQsvxaRpTkBf9wLX",
  "key19": "5vDZFmhfMCLxWmrSaShx59mfT95Xra7rdEjJodCXfBDVVbWnJJtVst5ASwpWKXWbMWyMV4NBR16tSoV4VpLtt2SV",
  "key20": "4zc5LtsZfZQgHY4WHxvM3d4bNJXgqv4UzLB5qrLjyP9DE1my8KoLkvJ4vcbHWNzgPjr4XPNXpP29Z1GvedxjtcHy",
  "key21": "5LpCLTXyVEHVgAXfy22jc5SHCnNY8NZQUyJBL4rcq6sF5psBL7dEhJQk4T1RMc5aqYdci2YG9TpVedRJk19zqaHa",
  "key22": "2iVR6SuU9jkKEAz9DntZNYa6bpQJwHCxT9WcrTyPcxY6rY5LrU5bsXP4coanvSG6QdSaaQFTqJFauM9PH3RMXCNZ",
  "key23": "3BYpQP4qbConDLKD5gbuLs51ZikzKKWhuExNFLt2ztQBJJmEeFhXpvoE4oHFdU5wLeojRVe8s66zjn61Hhh9L82U",
  "key24": "3vurSSdhFSQW2tZQhWaExHCwiikTD2vVZvieTQn8E1iJGAnD2x9iDBG7xqxpFWyWRG97YArcFZuoLvbRpu5euWMP",
  "key25": "3zncN9c3GxY4GrbsghHEfCcW6pGpbcsGBHvyVXZox3Ti9zzEQJ96kCXB1ZP7MMSBUKSf8aSi4DwN58UnGw7Hz93Z",
  "key26": "2fBeab3YTSHeQLMv7LuPF1wfr8sG9PzXDnuhAtPzRRNS3VLNce8HmwNr95qydGE64DfDSe34EGn2LmvAgJKQXUJk",
  "key27": "6oQgTGUsMjptBxsevvU5wu4ykSdMScM5UV73sXXBogktvcSgTg4FRro64A3aB19jke4HkHttcGTBEWuCJbKQFok",
  "key28": "RzuyYzeQKYDm547LxeTZtaqqVNDm47epXEv3KZNrgiSSeyVqf4XXyKhq86YUCeMybxjDBZey4Y81HPr5SgYh7KE",
  "key29": "494uJyoF1iMhEEMjLgaNynf5h6WvMeSTcTkNUDVJAVEyWGyRJYTvwLQbn5ASiNmhayCmEQgUfUsVh8geTGCJKg3M",
  "key30": "u9TBLEFaJYdRqB67QQ4SUXeKnemLVdsz5PJ8NG1nzYFcHQXJtsTRvQY2hvwZ8PsFJytczbQGckBVDa6pRRfUQ6V"
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
