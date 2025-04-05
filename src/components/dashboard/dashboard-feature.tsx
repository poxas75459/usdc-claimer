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
    "3r9jHEvXDv7pAShRXEti3vVdwmg9QKxq96JSfuH2GpuMGMkcQS2eiZnTNnSGh9DoaevUrMRWTgRAhZZUeGDxjuR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MumMbnbPaRBYVLREXS4CXGX4qWnaiTqo6mngnkWo2aEwtv985UQ38aSd6aQvaGpsLApBJUeyKAgDAvNR2itW3LA",
  "key1": "65L7AWzHP7Pge5u6ixF9C3SqrGykXGVzW9vPE5Ep82kjCGEUXaCnSg9iboXVwRXAdoDkRvR3f5aFza1X5BxPCVGg",
  "key2": "3tr1Rk2D8f8rC9qphDaRypvw4MCMxoAdKTREUHdFWVF46chXiK9ZS4VELHhDSyw4KP3qd8n3k3HxqBCxH6dYnnT2",
  "key3": "36PSw6i2HbHDijNZfGPAEBN7demfASPXySzUW5m1xm2ighG6MyDmYpz9DrMpmJN3N6cHT5tjQDa54h6wbUs5qcnv",
  "key4": "2H7Johy8T5Mbazmdg6Q9Gu5PPN2X5cUayhBWXegpk6gZGNbqnUbUExuwacoDEdTeUPocyp3VNxpFpAtdoGPNeJFY",
  "key5": "5qEM5rV7hJPF4LdVcKZMaPFEbtAiXyuuHQUzazHdJ9j5deRy8KzTAJRK2111tg3vttH5yjSeUhb5CC1s6Jj6eyv1",
  "key6": "3yosniH8iVRuZNSRPZmWnDfbcAkQiVe1oWpkNicmzHs69U5kpYBUFxWWMGw8QqniTnuBi2a2HFpXA9nFZJYA6GfA",
  "key7": "38nfTTdDcQVqsAkVoxY7VeS1eJDuiCXpN3JiBgTTF3tjj5Qsq47xZGiDvQkb6Xb6hhbRbdJ4PRcLJW4q45JMAWed",
  "key8": "3exNEAXmrMY6PNWWJaWp5xzw3UoAt6PonvAH3f4PvAdSPBoeaFy1cK3wm5UX92VnDByCUTWewEbNMDUP458vxfpf",
  "key9": "5Z8Mah6HKwAHt2N4SVnSkzzpvNxGUXBtrRcbwQNy3JAqvmHahqW4Q32mQMnd9m9umNvv8guHSTZJokEvY92PevFP",
  "key10": "5tFi3VsXRQH9bb17kGwQdeVZyiL312ucLLvtSz8u1C7NJJ9C4cQxCagdB8hzfbCWkxZKKJV6wVCaFLFk51QeeVGS",
  "key11": "5amCzpJE8aup8ypzKsCmTAMHLuKRTjtdA1yEaQ7eteAAxJ3AC3BrFn4Wey7iGvSRuDvKjxppdCVVjiQGqcL2zQtV",
  "key12": "23UMvXvLJSC3MwRatva9aHY58X3MQmxiKzsTQQLopQGsLSAj2qULw6ruLg4ENbZpHiTV3kRevaiyQgANJNBuJjB5",
  "key13": "NrDbDrXffoaYA9fqV5F3LjNsCFbLzPLcjY2BVyR3zd4kphixeVfK95agd5R2PmKNsy2GhQ6tSh9BnJN3egqjNoT",
  "key14": "cK1NAbdA1Evx7Y2v91oeqVqReeX3TeGQEgP7DAndzhr5oyf3CkMWvxtDnuZ4pwRPywftebTUwVdF141gE9XtYUy",
  "key15": "UdYHTHhSky6yQsvc67HLbjrSRb8yFHfmiZw6FzYtdmiWKcKLkysn6fSiRWT5qoacBLTrodNzPMozPwctMz1S6BU",
  "key16": "65Tbk96hHyAVg5KcPAtj5NBcHWVADetiUk8JdmvCXpf3rMDHYyZnARKDXyJjPQWSPsLpoazTZmwNWvhbzjZQZXTb",
  "key17": "2oDxa3GQjKndraixRUg2ebDL18iAvGU9x364xPvCESfq7Zth9yg6HGp1ak3xCxKxf2jDpPRYGpQXWyb8YnDFvyE1",
  "key18": "5stTZaVQwYuLjTo4YXipt7vUjr8ei9beJrMcLF4B8d3HAJUzXSFq4d8mVZi7Q8LKSXXE89Pk3ZZMJ2Tdu7GGsBYm",
  "key19": "syN2UYRKHzHkEZ3gaa3gDwdtaMMxDMbRByinV3nMP1DXte16SB3dpjYkKBKjbsFDFUqrY1GyFEbK7Waj7iFmk1v",
  "key20": "62ZTDT7QrDCKq9c7sRvhZdVjQ7Q1cpju4n8y74rrpiiioCo2ESim2MT9keJSLC2P75hTWL6wz8t99xXsB1BGF1Pd",
  "key21": "2qRNSzqKXDYKejb2TYTRXoQdi8JuH7NGqW47e2h9WAsGMeYdxp3m5xaAqESuE4JxqDesjX1MfPNpah5tiax5EhA",
  "key22": "5hphdm5LrD4pWKfEq4nBJX4ijrqTaRPoEtne2yZ9YezxHRAunoLVMgknhdjVM4psE8ktHbbkKAa9rVrscqv1FWFn",
  "key23": "3sgabYqZAqtr7UdUFRBbAP9DMan2pF8uQuwfydyGhCYbz8sQE65oREY36xcskf4YdCWDoqkUzo5mgPSerD25demK",
  "key24": "3CKKgwVLK5r3ytETPQ6SYFpgnsUMhVF4B2erZjDqsZRrVjuNSVJ1p1GESxv1VtoDK7njRKtDpZ5cmkgnLmKadFxC",
  "key25": "4dJ4f47E1v92ff319qAJKTshQUHVBMUwBpmiQir4G63Ajo9WEvEbVMTLqz6V5HQSghBvb7NVp25mB4mkLNxgX546",
  "key26": "3kj1nSSUcuYRpyEmPTaWx9NKDRGKVvrNi3fY2h3JFFG5YfFcLEMPJPz69NgTESDn6g9hsdpqFbu84Kej75Fyg48P",
  "key27": "bHaJtx65AEMiST3LJtjER6aa4MjSrrFsPwwoh2YG9HtNmQjFqm1PARyX1sMnYJyRPL97wE57brnM9hoDcczi748",
  "key28": "1SEnistRP2NZ2Km28yq3RXDeATYaXokNWNA8SKe4WvQwjPmBVbPF8onkx3v2rW4gjLC9o4kaoak2KBjiQ1nBTcX",
  "key29": "EZ11UgQwTt4Jm61dx8yAxfCSorkhTVbvFnua5Vt3AEuoas2tmYNuz2LsSi8UFkGoEgHAApSAoSRPSm58CLzfQ5L",
  "key30": "HqMcCEA6UQcE8b4J8Az468BtSpoJGA42A1VzMuwAs6cywSFnub7ityr5YkvoiJ8cgDgLGD9wC4Pm9YJLtRPf2HR",
  "key31": "21xb3sZrAHjWASbLrrwdWnzZVE5VnmA13XXGwKmFYtNHHJaqi5MmYKXGM6GEtGEjJVTauX5zVf78c7erpaRokP6h",
  "key32": "3dPqhSzJzUPSMGfT6FA1vozTQUEuqXpMuBSWNoDRNMF2XVLAm8b54Zq6FissnsSYLTtcce5eT3YmcxLK8VAt2UrE",
  "key33": "B27YuSt1L48QnnaF2SMapxanAh5vaJYm1LuuS4FVxaTXvPeuPnukw2qesddujiJC1RRaosa4gHba8iQtoJchGsV",
  "key34": "2rrmbWjpwYpc8F5kfq8WDymmdyirvmPWSCtxA2gJUUJY5fL4SpzVB6voW2myS1p2BL8cKjGc8ZMTHuwrp4kYYrEE",
  "key35": "S7fvud2dq6fMMhDhpsr1JYBARwJuduJgbysiqLVdTvCmj2G6qoDDHgiNRYH5SSVucW7CNoa3a3SwXPUvVbRg1Jn",
  "key36": "2Mquc9RZsYfNxd6HNdwpyMozzZjr5iSTkrSuU1fJcuXRHZz5HLwu1cyvJCzMgL8UqqLQqusbhYeUrKz5KbzWquj3"
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
