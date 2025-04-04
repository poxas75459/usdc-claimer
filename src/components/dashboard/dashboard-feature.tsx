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
    "29LVXhGfZP9aHeNJeV2Q9YGU3Yb8Y2JpGu4xaxp6uWkQSMqLG6jaF4ztGYtDRvNoAB7E4i5vLpqY8snrjWEur2He"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38NXU4rhZhy8kESWr8LPpz4GYk7VxAK6qc1ukvDeMfnFXMzZEoZUzELF75i1YLeGiP2tNgtaBZBgsE3G2YAD7JwT",
  "key1": "2cTSCeJoiyEFa9vyyyeM1LzNJBxbRdgqZurmiZaApJ35xKEYGw6SB3Fs6ydQvSBmApBubxa856To91w2B92CVSni",
  "key2": "QwRfV5UtbdFAVVoki5VKPtsmDRJAX42aoXbDL3urcppB6oEmNBtx3p5HXg2gAf7paKQMTD6VTHutbBHTTyTWfC8",
  "key3": "3qpK3uyy2j4uCphdY2Qg9AjoZNzvh7EkQamvFR463sYj9W3KzbTeD9VqUvDpuhpfVSPXAtcBjNza6ckYn1B7thrB",
  "key4": "b72RCVvvN8NY5xzzqn5ug4Rvy1oRUqXt5eDS8RgMV2B5c2mWVtaJaRw129Hkpb4aJJhhdjGy5mLjw8htjUorTM6",
  "key5": "g8W6WgELgbUYyWU7rMAjYBVaf5CZrAz1hcGZaeure3R1mjxtD3HqDohVbbXAK2z9yZ9pdMYtLV6wi3B7LmV1XRw",
  "key6": "5SGBtTYtN2TtQ28RsUT36HugyYszJ1rHer8Xx9ZPCkbApCPEh5LVUHn7wHiNnL38YSEaF8ZRd8mWsSEFge9mnnPt",
  "key7": "3itxjdc1eujQLGML38KBRbhrUBC16u87Nih67yx1Qgy7NKKdpGxnXWP2xHAueuifEr7shN8nmq6p9ejLfRkagLJm",
  "key8": "2B1zSKfQoWsuJ9H68qv47mrTNa3aUw4ThR3Rj29f6XmbSneRCsisMWCnXt8UcaprCzGfov2UMMr2aKfXM6mXgHW1",
  "key9": "2sChPUtGZzKSTrdbeyKVT3FNakMDD7EVj2ZT257QNiBiM6xCz7JtyKPPMHzSjx32pknnb7ZBFdrVL9dRYxF1c1Bj",
  "key10": "3S1L5y7t6wL58stp8MitrvEWnrw8iL43U31dLdqztNjShyrrTAqZDgM27ioB6TLiuJkMtqMQtuysXoMLTDGoUuVn",
  "key11": "61hVnsMS4h5xuKP8JKjD9obEomKZ1RNSAY2FXUV3yAZbUZtaUiTiAMjCHx1QneqNUBQjfXub1E91aePKV7HPDGeN",
  "key12": "WbpCjCZtxFPHwM3hn4GJqymNmRgKK4maWg1QGDPYyxBab5UbpauTQN56a1CEBU5N1EGc4PTAcNbn5LeKTNAhy5j",
  "key13": "2ytxGSEe7QoyYuEJfAysJnzvAVDeS4ALkocHhBj71hsxanG5nSEzLDpjB6J4ymBCXbH51HUv7whZgepsrDSmZGTz",
  "key14": "3yqC1U79XGpAuuCuz9b71sQ2ti51HkcdLydWKLcTeGQ9F2k2t3ASXv5FjJf9uYJVirkjctD8zmzXryNtoBL6x8Zr",
  "key15": "2ja1DNuX1aDzwE1iPovCajvQoqKTkNovxMAGsV7nFK1iD87pY4M6AMsVod5r79p9DJMxkQ58mfDPDoDtk9s7YBaD",
  "key16": "3EwBn78adJ9u3zbnWvdw59gaUy32KFLifHGzV7gUQ9ctyUAzUAcCG4ixTTEhNYAZPNs17YYgHauKhDeBDby4L41A",
  "key17": "5j4cqBFT1UmzhHKgnW3DV17eg58b1wdjFCMoDqD9MdcpDmNLemXTwyGVJCLXGvNZmY8Q7VdPduBF2upi5ghwE5SF",
  "key18": "4d3fkmpHBDPTM5FTomuNnDaSHZ3Wf7vdqzw2ykR1mZJ1WSAu2cnqA2zYkygq9q9oR9xTzv21aUXrBBHMaD5qGGpE",
  "key19": "45sUN4UTKnW5sgc5rExqZaPWFyfJigCUQkptqbVj6zWdvY5S8tcTKDyA7NxNTFH6x6Bf1pm2UDj8R4m7JVZNVmvQ",
  "key20": "25YYKPb5vdkMbRBR4m5ziXdtyB1R6XpaD4nfmPShaiqoBoqDPR83XTMWiMBVfywdew3mUix2UvtvHUmGiAeL9pMd",
  "key21": "4daijugFrnrJdED7uQ1kYYw4R54ohgWmoz2hDRCvviVfEfSRFgcbb5sCaJGGZaEpzcN41VtWWFqm5KvWz5ZVjGbf",
  "key22": "5yAPnYDzeJNUjwi44NTTJazd4oRhmyxLFBLozv5k2rT6ZCMgdyUyWEDevMd2fwcrWkjDbSVfS59odozFdH1T2y2N",
  "key23": "4n3EAskyPjNbNzPY46MRQVm7diRwToQjHW5RK6aaGaavVVcRCi4Qx9zy1Wc9qXxyu8y66tBXnGBUgKYicwpddkZA",
  "key24": "2b11GoM5KzfyJ82nR4ThWVR7WJXAXpJ3bHzhbGL5ZjxPVSHSk46oJBypQ6e56BEHUHhURASP9Yk3AW7N6HpkxkW5",
  "key25": "37QNibCwXHbFyFbzt8Umzu6xG4BhQJaLcWc8xDhWVL2ZUsJoeyz4dMMXdDoAb1LXLuKkmo77kmVBigyGmgKiF2eY",
  "key26": "5KwFd24aVBYeJzaNpGr5Lv3wpnn5vpJLSykaiEyGFyMXGBE3Jy7DKFGP5izKPte8eafazzkFRqzivLGLuB7dx3ax",
  "key27": "afvJiR2pSejx5fm4j4oFZ6bhVPdbfb95NfUcEN5SwmFrY4CXiEzCcci2nqPxNd44p8kt16oQ4rbidcozyuNFXMV",
  "key28": "5VnoH2nspXk3rkhzpQ88LcmgMZt5a4GN1b158LHEkXFiZPLGou98UARHM3cvFbahT7ta64ESiWszoASRoUNZDSar",
  "key29": "5QafsFfUBczpEyTTQFFKLMQ5MNMSkpnucjcB2WkTY6Jep4w9f61ebQZqehgFngt94NVq6m4cydppYfMmX9cQdKxG",
  "key30": "AaqCS4TrywnV9Hiz7oFipdDiAebrVrpTJnCq94Yzyr2msm2hbnx1LwJ84JfcriqucF2pkB6phbCAoPMCGZ494Bg",
  "key31": "3chfXw99myzSjNpDd8xzGS3b7b6RkyjRbnTFkxHZ1q4LyqxwNpBWrkMHhDdUQopypM5BoQpo3WRdniAxUKZmKDNH",
  "key32": "5xRPEkJQZKZJZC8KUzQtxpDpyTLTrzCoWe3e5dAvBzYfq4tUxWjBoPHrq2HLKhwdUSadfq1qC8Md7RpLT6gXdC9G"
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
