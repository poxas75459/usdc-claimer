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
    "PTBbUr6G4M31JMyHdYcFxUMJV4646NhQrXKddSkPto8tyesNbpoEMM4B1nYHKTTKVgg9LbVEPvJFef2rNtPTopA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MhUNBRM7G7KaYBj1NBBV8cmRyvs5yuZPgcBjEMfqFtqNFChmr4mVQuPTyMQBu2W5gKtsYRDysC33MjFJ4LkDPKL",
  "key1": "4ugkVVet6Fz9SEmYB21zjZa2F4bdvXe9PwAm5jgCBPJ9oMtTCzZo7ExbhJr1EfFLLNA6mBTrkf2yi6x3KkQHoi1A",
  "key2": "3EGPNMH668ww9atUkTpYJbBUENP39YcH1TVTM4puehUb6ZxAKjhWCdmzbioocGQtBrUvffncfKFdj8Yai39848N5",
  "key3": "F3xXrLwUhKHuNNV7BFtb95XiUEVYvtvchAgtG4DZfYHERHV49HsgPxJ6dfB6zikHH5eRq9Eid5ZizSDGopSRj5K",
  "key4": "nKNtudM2UEWeR5aqkmDhQjeozRenaCBBjGcfwKWtcBg7kbJybBQPVgNzXGQSaCfzFZS4AfqvACp2xu6kYkZkn9Z",
  "key5": "NMp4HBJowpX5LDc2wiYVbHcRFVyVVmKBWjRiExeqacGPo1sZKHrSiUVFGFi3RmRP3oL3qpC1xPUNEfF3NGJWXiw",
  "key6": "49wB4uxKk3A8mTXLJ3weQdMbvit1YpnJx57SRTz5JvcpFi95RCtw8Vpf41LGXaSKaXbd8GUV7B92VRxrb8WKL7Lq",
  "key7": "48uGeavWpatsrTt8CBz3CNUpxhqEBV6gMJZNugRMPmcqxNxt89N3NQ5mGhViVtwpK4NCmueH6DfnZCKd5rYn4Baj",
  "key8": "3W7DFcivVwBLJ9yBpmzpVLLdWrHrCm3nq68tLMVxS6NfGKwUhaJx7JEkbz6JjzDwVzhYUJThibEbjUQMk83Xwfeo",
  "key9": "2Az4xdczBBZLBniJwAGrhyc5abq5sywV5qLPCNmvRryM94RdoPACGZu2JFaojHQPqH7dvBikUXfvEp9JaUCazM8S",
  "key10": "5EQV6RJQLYdTggSJqzNhwgSZk5Zv5arPAUCASDBVdvSZBDXcGof6rEAFPGiAc4zpoZULhUkdqUqrQkpcDrE3hn9c",
  "key11": "BtSAs2uzdMqKSzxgPxCCx8gjm1CFdMvTJT8mcgVdsJkUoDo27BHz4em6jMdCSqQZoMyhtCsreBxTyXsRsq2RyxH",
  "key12": "5Dy2zFe2GoNwVJnGtHN86nYEgLiYV2D1jaKZj8SbvtaFYnagFbfTdmHzQG7gW1z9DMEZMtoodxAPU5cQ32xdsrLG",
  "key13": "54fgrB8oWTipGGqndwJirD37EPS8tCNSKNJxmoLGrqzMgeBdSFt4EPAWWgzpzif463anuRfhhbw2xQcDrZPw46mU",
  "key14": "534ZUtxRXay2EtsP9HEhdstdRT12DzzsWMn2hEjTqcHb4QoWtmpGfC5R2EoCDw9QmZTy7vmkvVKf4eaCnXTpFrKM",
  "key15": "44pWnZPZ2huPeJZhUWdE4DUsg2SiRi1Cbey6mfJwHog1FkP8Z6aJmgYbe8Ud8eMib7erQj2NBAxaz7DZSiPuUD7V",
  "key16": "5MkSFxgxiHXHqBteRQdzxRxV71R5Am1hPastDzrdaWTWhic8NEs4sD9DjwNc6ceQNQMHhcx2UYDETqzxBjUjBTYt",
  "key17": "59D71gHrRvoeUVk7jipWxNKWwarqcSr2aU3eAKve48vqqPpfGVpujv1zXDFQnSvrJsJ4VdtiUubKo3kgEkcaNwdk",
  "key18": "5xEZUYfeKst3L98PgAYHPCuK92yaEaLHThLzUvazoPbBuToV3YB4HztXnehkw9kCVoxS5S1WgTZ6wexKqoo77bfA",
  "key19": "kaGPyBs79LXC4LsackbHpHGzkWNxvaMbsYfqrnoSAYLbWVgeMvUoAqhi21oMFSX4m6XUmPgpgTC39Xt35Ehc2YR",
  "key20": "4scMdpSsgDzo8N6kN8gHM4tZ8y6oHXSL2fnxBXLhGahe5omrjTahq5TEYk1RW1ebV8jaZARGayXxKzgBX8UpJ3VN",
  "key21": "2n9pz9xvQbh2zx1hXPuFayr4WUkgzaptBse7hUwiCVjaVLFuRFzehxC8Zv3DQcMtrafLLHvibe9cdetbD97zRoz3",
  "key22": "5hyLmSJ5q3fKjNzuDMZX6woxBRMrqVe8hxmRKAWt8NQiahmuc7icjXP4dvm6SbJYBtJNAPsG8RuxfRKDfC9X6BoU",
  "key23": "5kzKivvVAgYvprwLVYAUuYs8fZEz6H8ew5FXRSFYwr4EtrjS5y81PvGU1CF1qWDxYoi1unJx7iu2croHRQHy4pJu",
  "key24": "FPyGqUvCrRW68H1oFaL1j7L3wxsThTrxHhGNQMJpRYaprKQAx8YpmNZxKEfPNkQHXCyzRmD2Wjpe2Lx3tDekwg4",
  "key25": "5zosCSUTHQnD2hPR7YFTT46QerYz5TLR9roCLGMq3Ww6Kv52uuQf1jQgPd9CnhY41qP2TTCrerUZt6T2Q3jWnbZa",
  "key26": "5mDyrjK65fceXwKLKfjKvqGUbCVq8AkxPH9s864GEiXcSFhDRK1hPnLmYXfsKKyS767ycHE4KPeyA9cRZJ2R2phz",
  "key27": "44rhds4VUZHwqCikyW4FgLs64acXtfaoRbitZqDrkXjRR2C2GrdKQAB4W6NhzeWGbqigUvWwMiDDT9e5RGYmVHrR",
  "key28": "4xB8EXWciH1fczgwYS1YqGk3FY6KfHrXAQT9Nb58gqCZqVGDys5vvaxeiGdQRv2ar2X9NAaA6w7D8SyY43CNDgUj",
  "key29": "dudNUPAfhy1nCLXNrDbEQDjKodQjspS6cA76dTMjKZ7z35gY7Zg4J9CbZfdPSezZ64cmQRkfYFwWrYfRu28EdoR",
  "key30": "5nq4jJmUEEHyhTJhyfzrNmF7rorQwTixGZqLAP8etu2QcWK1doGfN3bs4rbfGt32fSc9rGLYA4cmzcsAKsBTD9Q2",
  "key31": "5zgrE5oywwhADTYUmHezXUCZBv6fCk4fc9QBa6w5mx2kLio2a8onuu3StWLavZ2jZM9TivDv2xirk5h2AD3NC7HT",
  "key32": "4ssAnqJ7UWXVNHDiW7NKYYfG4w3DURdXE2boy3ifk43amFrc7wXvWyRa5KpsNynTAkaHzP1x1rfCs8vDtjCMZnss"
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
