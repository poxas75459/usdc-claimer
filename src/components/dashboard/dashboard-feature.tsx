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
    "2T2AAvxst3WW2jWEpMDpKDJ7EQJv5oDoTquXqTnN79SCnVsf6jNEBDXQANsEtq21eDtJz3azVNywY9zSvuo4qfgr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mfgcN3YMYt2ChzdtHehV25zmgj4RkLokiDKx8y8G22dosAtvEEGNWxCJB1UDNS2v2rUNXP34KxLSR3EFcRmGCHz",
  "key1": "ufGHPfXTLYwJ3jVwkUQcLWre1hDGftGjdjGGoayd9DBtMfW3XCwg9PSTc5k5DETm9RpBfeK3BVRTqmr3ofDVoPJ",
  "key2": "gDnWRvL1MFNFAuygYbfUUvYpJmXirmwuYPL9RjJcGe7gEU2QP44fFVKSoahtXj4mPtfr69bsHYQQdvo8us3cDGT",
  "key3": "332qBDcEq9famDARFtHpB9rcfHmLLWoShfzwEphiUfKa1XBh1w7GtwvKf4QC4kFErkrLgNaPWGS7Cxbyj2JHEmH7",
  "key4": "58aS7ktFhmkt2gbpVkcQE4bZiPb8vuFFtWowBYd3v7QcnZovcWiJobJLCVFqBPTqdXyypzKWHcmLdQi338JTJuMN",
  "key5": "5rDfGHoTLUxQmmkLbL5n4GdXCzjJCvV9Zn2cJvkuJ9AhLVxCxBRnh2Fg6itrCesEe5MnSUBLhN1vd4K6aiXNJUpU",
  "key6": "2AmAXfbYnUhLvAX6StnHMWMhQJuM2Toc3PCW7WrGGjT7cKwP99qZd8PAduoowAFmDM6UB3g1SkAh8RfDFSu1SkTr",
  "key7": "3EmjmKjSGvEna34P321yPCoNZsN2KQt5CnG23UHs6vAr5BYkjRwjSPTYJYD1X9oRapuQyRosDhnjAQUdDb9XzcMs",
  "key8": "4pcDuNMUQ9arFM4Z3rwUxr7fHbwWdriEC6UxZcoALsP5PLHDDZkcVeYnZXbWbfgPCHN5i5mw3V68GpJhJKhZZ7Ue",
  "key9": "2dtNK5JuYGzccDnzNL2pzVtnwRd1kt4H57dH6pwaWDbHbERK9NXsqQyZ3vh55GSwm52yiD5NMtoqGRaqLPy5qB3Y",
  "key10": "2EuxCSJrsGb55dW3rVFXbmFnQJCgH1fSLtDnXFc96hcqomhLEjJMdyr3XDUnRFvf5mzLtUKExH1mpuksij3mMwoB",
  "key11": "5Qq39gGFuhsjC3y8bigLkCMNQxf2CocZnE4MqhXvbBW4LkPhkzhvSBhgUX9DNzpMLtXH9mgjZPHnVsbwqFLSbwtv",
  "key12": "gcVeUkmNduAQ7nBPCHBYKBifvYGxG5kBuuexYds2g61fQZ31uyfmYf6Zgm7LfBjr61DaJnBmBn3Z1w7FspEcWjB",
  "key13": "zruuRoKbsArqP5pCCru3dekwEdAJBKj4noQTcis1VRuCjfheWgQkLdH11G1YDtKCDS7pNjkjaumkdB6rQKof7CZ",
  "key14": "2ooYbNjGBhNDTfJZzK63hMwgL7BP7wJiYVyTDwe8ayqjxfLRkKTBgS5um7sMwVzFYPfp5mGK2T97d5rpwvCysCaF",
  "key15": "2FiT8eoT7rjMLyhEEjfHn1UQ7XPMjWoTB6PiTAQNJL9e9eXNZpx1WbBsf5JFNfN2QcWJLZUiRVg2JXQnGsYX639",
  "key16": "rBzdfFUNh4vtqQisysCrAZy2AHnc92zNbUhUhreDk192vQC7xxnXgSKXRzQRh77B2EEdxJdBEMAxekbrq9KFNRa",
  "key17": "3WTk9G6he1h55YRAdpjg9Z7Yhzp6gFVi4yPvP9p2hZdQQZJ2fVwLndkGSUwPxHmj2m4zNu12xDtd4zqMHa2nQhgC",
  "key18": "4LbgjzNWogQCLJkgG2ASxWUbXrzqSdwibPNVtpYtNK4BYtfFSAsMiCYDMJ6LwutstNAvKWAE7xz5U6b8Er2RoBib",
  "key19": "44aZwYPKGPMF2yXtE78baEWbJPGpeEdwK1towHVAatFXdegp1GCd1SBz1zvVQ3KXjQrqsEP42uZgQvtsYSycbWBb",
  "key20": "4rquVmqhNs8vqabSW1PaKjgM5Mpef6GNWRyzFYjbNzzE7BHvkqbKSwyWtwmTjHnbEYdA7Fkmbgp8RAtKu3nJtmKv",
  "key21": "Utvj6yGHbDKyZDwt3qdn7zGKbtEdwJ4w4iSXBZyAhaZwZYZS26eZdgEsqzbmnPjJsZ2ZroxPChy3icvWFRGbMmT",
  "key22": "eYgdaf9ytN9sUkop8UPqHtGs8asGboM8U6pmwnvZgXZWAmA8eqsCunZwBhheSaqDxUQH93PSN1U8qs9zjrfqULe",
  "key23": "QmepEMbRX33uRdjngEkBgvf88W3VbkeeHo2VeKZtvajg1JzUtUquERibjABNrpb8s6LWMyukE7kYf1dyiPNVs4P",
  "key24": "3p38MdeLM9DHL5AuVxHds97px1rv2hH1CChWtBCPuJtgGCaNUCkeoEJHVHcWQd353eEiSAosmD6EPyPY3gH1NGGQ",
  "key25": "53fMqVmq4J5P88MjtuPjNy1UeCNgFZN7K7yaaL1ZmT6YF8SosNGEbgtXBQuq61WdrT8KJKoJoGotRqm71MigNZS",
  "key26": "4KM4S1wQYQ9jnPoSA8MWFL3GJwYRmzdaZdT14Y4ahtc9vs6jtYSNG7Jjh4coVoFHc2tD7GWyBW2ZQ8GqCSSVuypc",
  "key27": "3U3XipCfq8gHKQu6nizL9Nd517eeaLxkgbjE85DLN6xQK77yhGA2FciLcwtayfdjdTY75jbhkeWsdZu5Ar9FkPJC",
  "key28": "4tqjZrbMjRrjTW1JhWaS9x2XCYJ5xRP6BcP1G3DBo4iqV6RxphrLoGvgsTQTDVVRDKxgDRYovak9sQH3aSZY9j6",
  "key29": "62WvmnCxdARKmkVrmVLr6Sn4evRtBL6dGYEoRuaUGUGmKy6q11br1eTyXu9GykWcNcfn6HJpwAWUoDbwypHsKJW3",
  "key30": "JwatK8tkArNdoTAULN9CyUdyP6E9nCMXqfs4KpT4YtAdYGgT2gkDcYWm49n3fpFYC7YVpzTkHdnBnDNv2Me8Ts4",
  "key31": "5v4vGNqE24x178GbiwmURgDeKmTMCehPXzVEJoAcCRhnNJi5Qy5eeRpA7vfyFRu1ur7SiyQGTs1yqqS9SngGxaGd",
  "key32": "4o7hZJeYbhSmnoADvztUQExKgcWxtVhBJFEtK1TnWZ2TPireg1yAHn7W5BDzh4iLzS7MgoQfjwZ9UJo94ZbEKYno",
  "key33": "2PACWFxqXjrsMXrP5M6upUs8XsjzyutVZ6HTMV4Gtxfi8GbgaHgVkg1FcbhiVWLMDPdmmj8CJeMupomu9rkURZxf",
  "key34": "wds1pCNmi4GNMZJ7ApC1tzvArhV5bvYFhRuEMcUroEWMqZH3fujMu1u5ZJR9RX8DDH674C7oym7qjozcksrPoNm",
  "key35": "4Jmnn9Yz8byGe7ywLWMUforoCdGE3FtgdnPJ9pcA654EErvFgjnu7YrZnHTw1kVnzySUhdE6yBaa598mjF1Ba7XF"
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
