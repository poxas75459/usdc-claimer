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
    "3UzzjeBu6su8gvkUeP2RgtKBtu7xJXiCfV6nqjufCtr355C9ieAQHfXnGKnor58vjGJXqfbekLY1WiPZyToJCFSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SDxShfeatLNXWu6YZo4y7JgHcv7rAnh19xvsdZH88gFcETJDT6GmYPgRUfSZtPP67NU88ydTnd33gH6WXXGeGdw",
  "key1": "5BR1sCBpVGaTommXU4HGCZcEGeTWDN9aKNhCS1XcdLZvrXdTJQtw4R88fPJQavmYTR7PcSUxCn1gTJUzBVBYKjGZ",
  "key2": "4gajdGDkYsddN9PLnvmTKSiotYjQeuUoTPSa3GbpPgvBai6fHhjPLooUnartbZkUJnKaCzvAuJpirzySNEsWkfJW",
  "key3": "ujnQuacZSfnqMpbonVfqnTKZTrZRoWFmQD4K3FsV3MQ4rfgixKUxia8iiBeFA3Lu3PMf7jYStJUcSK1CZuXcpBC",
  "key4": "5h7fFAUzm2H8FVoLi9irjn5zDVs2FuBcArrHUmZcNAxnPSVJPRyPKRwrS93inDzxqF7kX53Tfuvw6aGrNMADtVFh",
  "key5": "2QiWBX613mA1XzCb6wgbY6N2evDLQdgeEU5vK9WdxJYcAwmPLQMLxXFJ6zUEGNZFN6EgBRmoPN3dn2Sqqpumu7yj",
  "key6": "2emr8SmPBijzwwgLPKiUJ73ZJVubX6fT2hKj7jMTyAZjCYbi4DMGhN7dyUrKJ4UDeaQ28XDBKcBPdQC7AaMJ92F1",
  "key7": "CFoYkND8AQGs1CXwR5ZWDMMi5E6AnZz9hY38ShtYqtVMSfqRKhyikCauM9URGNZtY78qUWW5U5P6bAX4uBmWUpp",
  "key8": "4T3PcgXjFznXeuB59jwzSTXGqnWes6pdgFCtDnPwo14nTC4k37Mgcce1AQnq8o18oyfrXgExMiHGRLxPRYDr8nmm",
  "key9": "5687gC26eqpUWaV9KQjbdBgRxkDVJakWLjJD3JN88RB3WPS89ottk1qoidDyECw21EyD3txNfo1LNoKapeYDKpat",
  "key10": "5QspeoTjV6iWyypdHHtFLdDa9L3nwZ834GzSAE5UPzHePJQbT9Skwtc9goNX3uk1JSqc9KkVwtkYKqC71zXhbzr9",
  "key11": "KTqZEEouRX6HRdmfTkYNrA4KdyCfXmdNrp6VtkG7h2qfSLbec775AJXWjdeKWe554SfNwiWM9WE8yLigN5VduC7",
  "key12": "2G8RSNP5npccHYp3C8azYxZrUPybUJHnMtpDZCJcLjezgDeswkQMSTe9eWC78aixZdJKmiNUo26CJPeJvfombpAh",
  "key13": "3jEsLTNHKk2oz369wxy5Mz6D32JJc9ha9gJH8ECYti1HxaPCnbjiRNrLhsissze15UtRkNSWZkfbBWJmbSq5anDi",
  "key14": "3ixkFYN3gYLwQBLq6M3NCi5D3XEFitj2bxmBzaXbrW4mB9Vbd9BSsRpAqHMzbHnCGDiAdJLQeSPXHPzqCippRqQP",
  "key15": "3tLPy3BgQuevCUEWzcFeHUUwihQs64ocuVT1mgB5kwFeM4TyikLdB1RYnM3tfJeRqTiDBpHzXEy9WMBqyaatFcyW",
  "key16": "GdfBPk1AmEw5AK7qoUJG3UQVe8MjqPSaxLsVnqpqDA4TrVmatD6nVKFG9eiBNdKt1cDmuhjEefrMkjx94W3zAeJ",
  "key17": "1Tdf3pudCoR3FjLY41F78LKtgCNHwnEaAKsH82Ep8eD66jveYJ12EZdm5bjugsDaM5Er5BZhRTGtxS49QtRa5b3",
  "key18": "5K4PmZeaCv8kWax5TSLf2CmKk5gdeoM72K3rju4TEz6HnpLdbvwr3eeuB3ekQGKszeGd1t8fp4Y4RkkQhTZJKZV9",
  "key19": "5fLE4gLgc78wLZudutq6CnKoiZEthGd1r1hsPToJ6zSimNg2sYSMwMHe1mufejoHYiMVGHoAK4NgTSiQbFnKUd7G",
  "key20": "3w8x9k4sFg6vnU2PZ4btTPcr4rysUn4rEoSyrmrVLcmpW4heyH2RbFQJVdxSBK4scKHgiU78XzyLrozEHonskzTG",
  "key21": "585axhipg1x5mGcKLGot9W8U4h5smtUd5uqyPAYmqaCiwBP49hTsEQKD84oALWhD6t8N1utQWg3DMShRfTheWsNQ",
  "key22": "5huTZtJTPRart1qF24DeXk3bM2XobQrNETt5jhAVPUzDsbQuaXZVNtbLm6rsQ4RixjZcwPqUj9uNduDjApHgz7hP",
  "key23": "F3PPaC6F8BeQRzSzxvajgdnWzDPcBkcPBGYn1hk7JsRYnGaNtmYS7fF529b3RavV82L9zr7C2K2pv9hYdC4dJ7z",
  "key24": "2sjSfboP98oujPoaEAavn2YT733DPhbi2cb9R3Ldzjq5WGoHejU9rz8WUkKTHTq4X66oDNxuFqLByRDmnQC66mzW",
  "key25": "5mMM6bm2VvedBhmJokpdocTCV9yrAGUhzBSXKGYjWRcScnFkZ1Q8n4wSkG6EvJu9w6E8PEpbQ5Hh4xUahq2tn3DB",
  "key26": "5gjGjpzuPbXaWr6J4FE8Hx2YyHCiY7uR21qrCLcEfLSDAu4yugSL6X3RaPMn3d1VRJ3oo9Rj6ERw9Hszs3SokSDj",
  "key27": "ud3BgWoJVYkHuK8DeJZdRuY292e7eWXTMN4cUGaCuFSgcVLVeuD9fnHYL4aebshvacKMA7tfRt38gx3ftmbRvyF",
  "key28": "4tJtUKpMtrzc2AVGr689wf8fTEgvtymN64YC6CCYDQcAXYbevygoz3bgR2gbsTXnyGqXjZBhgemjCkMxz5cYLSXd",
  "key29": "54nSUzG32tBsPoNFNmPqxHHJSCUtBgbnZwGBwiGNWGB2iqzwQs9toJwxAqPV3cDbP1trWUTokyLwoNDkSgQKjnwY",
  "key30": "5uVR1dFfxfa1sfmHbp3TKWqaFtXdhn3wiWHALAt2L4sx8Rt1nuVqg9MR1QRwsW1i7fvbjYom9QUkgzqEjbejCtgR",
  "key31": "z2XosdFjupToFZc3SfAHGd4J9SMkb8WYScZnGCryAmBGjGq79Ry11LiNNaoDzKgVqByz6Xp1XbzYNUPeEFGmRfC",
  "key32": "4bjwSKGEo7hmjB8hJRtAc8A3Q34MSV5xkhQcHhyEdkvALFhbJNcgXsg2fzNhwKnTw94DbDsAA1QJnCfs6MqZ6XWp",
  "key33": "ZH7WdPhHbg51uVLzwnxwYvNUpntL59LuFq9Hb8yiCuFZaDwW1ypSnZG4ajef2hoAiedGfaZvVuNEhYfgvoZVFJL"
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
