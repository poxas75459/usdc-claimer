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
    "3SEza5VLh7vms9pyADDBmECd34kBi61shKY36tKVLd8vXcAn6qtgDDf3tSr34Pn4jiHkPaM3a4ucq7SgJ4uEdxUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UPLsDbKN2Gm2ZNP8CCMths2FrMCyfiaoNNXwuRjdmWNNzzs13CX5h7vVE6a1pSDj6uBd98Yh2WLWPKUTnUkJsZm",
  "key1": "3DMLB6CrkwqxebytSqn3njwuJ6ZWXvDtsj4Myxa6SCQ5c7YekfayGHGARhcK8KwZyAcpg4ou3iq7H8xReYPgjpzu",
  "key2": "pxxLwNpBmidRKN51uzHqYLpxMWz9aJvZn83zPcLSDdqBrdMD6kCTV5JQssHJLjyYL1xL4P8JpNb7sdJAchjQYVK",
  "key3": "4CbRgD3BirhcN1hDbDe9WW7FjECTceP7JaQ4VvsFbWzN63n47cQctBzxeNjs2MdibvvZXYJ6QVb9YyEWS19rCRtK",
  "key4": "64HysTUTYP82FGFissStD6zw6Zyu9LRvU3nctgLpw7dGK5JDWaSx5SC8rWgcgVpFD2y3AM6cDi2T42v44mLCk6QD",
  "key5": "41PVnzhQw94y91Zpy3pzvvYTrqmDtyUVSMXVhbvb9DPBUKJ1nsM1xWPoZ8B3YuXoRZ2ss1AbvTHoKah4MVyp9PHT",
  "key6": "wowSw6EEknkai45HSVXF9Cd4LB4zxEggJUKvaAfBWiXfcmXqotVJER2FeAaQDH4YckjKVsGbUz61BTh3wXcqkQx",
  "key7": "5Y8kRRDLF2GR8sUQKUzRSAKBgcLxjSaMeedScRxkAJ87DNiUuh4LYknfHUVe78ndqRiyjRXLbMVoHzWA9YP9Xjck",
  "key8": "64uSRFjyJqvKd5hgfQkMmuREX2GCHvwsJjtShwfHSYBtHMewX2rYBpRHm4RrvJXpJuD9uYfjPRuspaarXgzJWwJu",
  "key9": "j6MMo9Jaz3hSKab7vgUZizgf3uCUgKpaiugvfrHbzDjKJXGAiLKBaCshnNsD6RM5VtePukxopMy3DF95tyzzYvi",
  "key10": "2Q6kffbutQQmsN6oU8bkQStVzDtXxPsqMYEaojrC99PV2x6QSyre8eUqASpk1ptNrzyU8DZpvzK4x9tgh7z6v9XA",
  "key11": "5T8CUs8ajonCuiM4tMxm34obX9isNVGBxLhPkJY2SkV5Awz7s7nqn4B4UeJeDxKeVGxtvHqHmFFMzs8RrtLyuTSW",
  "key12": "5czuVb569u8MTtiwTJmp5rCJJ1fgRma5qfJTFDVzov8NrxEtqoXvGb5CGR1LpCLntyPMdbsFN6sgMgSW7zhAPd5w",
  "key13": "6bP7FMP71vBNAsRvt9dzUBXSncUSK9qx3EkokmKjg7v2aEnerfG7ppKyindpxcwDPfEPovTngEv7f9DMwvVthdw",
  "key14": "2vEyGTU5zGiRHk4EHHZk7cRVEYqBFdvU8sQP6CpkCsWpbb8qYMWNGieB4iqhPUpihZMeb8P8qrrBfgKCeUsPoTPq",
  "key15": "3s15x4Bt9nycCL94AfW8xvdBc9PJG2iyoRjxPuubNE4j8QgPWibot1fPFeG2rvcxNMnB2csyBeWFw4QRfFEQi25q",
  "key16": "219QvBbtkoBD9Af4kzXHCR4CYBPkBVSpRn1c7TphYrSgXpPdtwUL5PrU8kc2ZyQqP8T2vCkJKMczhQXx4RCuYurd",
  "key17": "54bUDLTKKkQTMZ61JyuWtBDYKe2Dc8DDWk7MPJGJNnfDwKm15jZX5kDpQy8AAjeQ58gsx1bppaqwTu8NZE9FWXRb",
  "key18": "2vgyBBa93cnDqcen3XoVrDgJAc4KZXqnC3U4fGVqg379aWvkhr9CHaKqMhx9dCyw4sD6uaVtN1zpxRGJLFdz1kp8",
  "key19": "iWwae8uCyrnGmEWx4psm78mEX6scaMsmkStUUSZ8fxTRcQrHL7ZvJN6cUnfdyV4XYdiPZyWfD6kPLZ2JnAo36N9",
  "key20": "55XESMi4etvQYn7teNhyoMZh7QEVYLivBp8s21JtyqZLAAFJcPirH3zjWfauivSwTai2tN6wDoNSGR7Rs8PVC4gS",
  "key21": "8gogaLnsnRoLhQHA5yDQWDY3MtHhGWb7gEjemcWuujkXsXEmdycGG7WiEXR6asPhQc9EkswZEyEHD3z77uNTwtW",
  "key22": "5eR5B2sUz9r8vQWPhLxTMCVroJqeNWTWaRiVhdJEARr72M5EKvrJf1WT7bLRmNWEUbLTAriD3UYy1pD9AdveNNFo",
  "key23": "2wKBoPnYfhGjcmaUU9npUnrCjWJ5jTxH4v8fsb3vbAaapqy9p975NYaY4xFAvcAefKerkGd88kWtdP7GS5o3hX2u",
  "key24": "24XgvvfF62oeTjTGkJYJogUXyrU4QwLEX6s4vQKs6fNvsDgPWjwpyctCgoNTVDZXf3XsX9M5WQaJ9Ko1493pXZcn",
  "key25": "4fPed44HkXYkFpg4h7QTCQTZwcr9tTkxwDm62qExyZfQFiHepjU9QmrcjSpJW2cxfNbDkYNhkRm3UrkdpkmRSdUx",
  "key26": "3wXkPaMMsRPZitpeYYJr3cnVUGi1LuqDcmme18WAhijmx9oZS5EAxtUebu6x3Q16q3mZ4qeUb6kCfkNT7Gr5JyKK",
  "key27": "3EaGow1zaGfE3TXQX5LWGaetWJr6kEZ2CnDae5YHHPpEwMmH4dxSuwNH6TjWXmL42bs6xgurokKZqPhqKPGE9v4k",
  "key28": "3xPRn8wB7UXtp3J5fBwryWrZg8sD94dq7vS9VxStgwSx28erqwzPKMqC1qcS9aZXTLNXVhxE3xXWBBjSLDveEvjR",
  "key29": "2iMs1RyDFhiDWuQdPpaBDbUyCs2KGZpqcevTboZJKpRRbc9aQBkE5DkmvHND5oDjYHyzY1kzsyskVNX6avjJRDqw",
  "key30": "4bwSTYxLRstyUvYrhjzzyxrzyqSQfvVLAfMCMzvMGmYcmkAbBH24HXjpVeV9ohRYnikNgytBvD14ApsWobXiLa3E",
  "key31": "xUDRJWYwFSjUTuSNGRAejATdeyMCZwov77reXvN6DCDdoL1ru7bZ2xcyDtSBx1WxeMe1HMZyKCD96mEafsNUxjo",
  "key32": "42vx2nF6S2RGVFNAW6RxcE3M7U965QyaRRLUFKo159Amz9YSJjBbkGGf6ErJ4M6d7vAGtirEBz82kHkaiu2LUZGF"
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
