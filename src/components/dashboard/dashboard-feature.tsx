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
    "eZCbXz73MKeU7kM9VLFE8PWogKQreitL84ESzX1KUhsxo3RTZ2k3MfZ9Zz7KfPePf7h7VZADihYtpz5y23cqRT7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hyLFLuscnTHRbExnXzhbBLHkiG5MMefXc9FcWCkYT5Dc4XmCeJtwu79rJKvQoNWn3yZ28cfJNGUUuS76ZudzsPb",
  "key1": "3ps3vorFCAasSDCoX87UczgBN9rMDZ1quzToq6M4D8yFGto9sfHoTe6moL1nuEYGzQgZDC9EZLpRUiPw4p7PRsQE",
  "key2": "GU5HLgRG5DUdf94PWADNFjGFLXDXq5SXh6aqqCXFrqyzzbxj21jQ6AGRf19sESYbNkoqejCzwqXSda235kBe3Za",
  "key3": "fReuGL9z4M7XFpWek9NrUw5af5QhJvYRwiXXmqWPHETu3WiC85183xCmz8g1VgnGTKeKxYxsnTbNTzBJ5KaguBJ",
  "key4": "2XfVpkCvunxwzN5aWFFu3vC9oeAiCbB4dHKr2qN8kvpN1ri4wbtC1dE2MkyP9P3ax2wVbxKKX2fk8mfm4oeaRHcv",
  "key5": "5DTnSdsAN4WSGuLEr6zMw9oPT8UesyygAXd7NDGWGtDzabW3aHpdeuQRuEvRYmqKXq8GyZaDoTe1HpSiXTJ7gYZZ",
  "key6": "4B3PubTkXXxBdUSZjtuoDxR4xh7ZpHP6WCLRhBXUSm51K5E7JYGvk7wnfVcAFfQs55YcyRCrUh4wbpR5Y71otCmj",
  "key7": "231gv6KnfP355ed6qeiydbNbPiRXZk26AQ94gALjKsZUpJWH4yamMZDGE7NXmiZ6X9xVZ642gL5FmCJC3CaLSoZf",
  "key8": "322rVmoXvbbbPhTetQHpMf8PpF77UWzzr9cbpQhb23pdaqcZocySr1bD4arSBFw4qYAnz36PdYmUc7Vib4rRvcMm",
  "key9": "nMdJsvE5P78S66qQeXqkrWMGDcasMpZTQCT1KgLMMAzN8TcX5zCLoAZqVaJgsv3dcJyNk5vMgaMHQvjZVV9x5NH",
  "key10": "2w8AKjMV3G2qhZroAWtBREuy2pMaZgsvwRjsUb1mcjFck4UodEYeptHveBj8dhekdsX2HXZ692rT2pLqrWkbXwnF",
  "key11": "34Y6frwhHezZ38kafSLLErLZUfgWAMU4GY9PRj36o2isGrcCxmuvBe3nrBEMSYGibEuFhzXNsm8rZyJ7uPSxqwKg",
  "key12": "4DKGcQimsbkc9qMmaNuehThUkZXB89RLHkEwNQBR5uXMVaRW6xyVTyfXApM1dyCwjzQwvuj1o15zeSkUPzawLowD",
  "key13": "4ZY2NpTz1uZyjw7qKkKr38VuRimG9rPWYmHhqhDM7ym3uV8MztYTQagMRt2enDKPpMTBGPpJELYDAFQvLRDvyphE",
  "key14": "4Q8gCCt4W12KAD5owQUYajiumqEAJnZPZGYHE36ZVFfNciY1HkUwtFApCH5R7aQH86ufqa2RGK2XHcRH3nKyXXaD",
  "key15": "3xYy2Pu5RTJLy3pGVPFP3a7f4d1kpwRp6KPhsQEXYsNu37KqE2gka4UXb2VpfGPZq7DzymqtSWwGvNSwDX3VKEQR",
  "key16": "5TjsPJYif5MnYnAfLuWkBCTDjTKZgmWFc9XM81fqHR7q9TyeZDRA9mDWhsuPSgss73Gq1GxsMm7i6s5JNDDSfda4",
  "key17": "5kAdi4XcoZS5ihXVtxEN9se7vxDkrcHuQgYbmcJBeGwQWfcAGzfxZ6uizGQyJQEjmQ3bBLEU2HF4PmdxkYYBdQ1S",
  "key18": "Fx9RteSVoMaYaxV2ZbPmz17LJvn7KZkU3H4JM246Fgk8EYKZrzXVAuLvXUcnxnZwZodfPVZLSZEkptEyiGCg2VW",
  "key19": "2dgZraE6BukDYxDbHsahku9iRPZtT5j56wzty7r8D8qZtVzimrUq3ismNfGdqfPUujv65iwJQ1E2UxC14m47y2cY",
  "key20": "4nL3Nn1yUYMxPRzMM3dz8b5dzSdRPtkDfWKZX2SXWQSVYpECkiETvMatnymSgU9y5ocEcSpgAepbqPtxb2CfVFwZ",
  "key21": "2r2WibGkMFPPvvJEqdkCwDoLg2Z1WAFVjonK94fXpJ2CertKUCDM1Ybwp9TfK3rNdVhK4DxWgtqrG6i8V1rLWmZE",
  "key22": "NAqU2emXSm6bbkKSyobM3hBmRB4cYHKbL6xobKmkV8ck7D884sCHmjXSHWkY6qm1LKHptUY6ANF3x8zAuYbU6Jv",
  "key23": "cmH8ZX2dBwGBrZ9Xic84DoPCbw2s5DPVSZHwC1crRXuSeDaepKzfiVMWR3P7aFjR7vJnLXVjNZJkpNdxtJdJDJz",
  "key24": "9qn5fHVURKBNhYLJM2y6eb621Bmwervk8KJ8pMw2cNn3igBVSSdZqGJDcYSjtiQCrbHQQdZCpqbWPtETvwu61gK",
  "key25": "56RjMJzFHHXbepdLux5AdZKqajvX1PPHWKhGZKy9Nw3REsCb2vNYhLc1qKS7iJVkxayMbFLiPkhreWtmeAV14azX",
  "key26": "2j1dSn6aW5m1sXkdMhNBMKvPBJB6zjhDd8sCBfdeVFndouUQ8Qpds7vEn7bzeCW3uRHfg4qkuwTpy711fqzHp8v2",
  "key27": "2XdQoBriq3MiYY6gcQFj2DacMLM1BsQph5iiyDAtTrsB73vqAeXiCmJxc37SwrPp2K8FUAUgCyw5E1gXGccFrD2p",
  "key28": "4MSjfVEjuBvLHZnDuXQqwCLzkSTtNXGDg7jZUrE5jt6UzA9R547EWw2eSrnrnfgHU5yni9A1VUJvBUHsqGjW33uZ",
  "key29": "2RFcxPmMPWndLXWNuvMPwXkmJYMfrCd81dMxiDpKpqVYH8Akn2usAXzWNnT4a49SLpGEt7qLPKSjGrRfzP5e1SQ5",
  "key30": "EuH13pMcvPKWxyCAwCJUVySowf7jGCNGQwXb87M9kBWcc8PQMM1hshh1zkYLvd77FRGFUH2c3KbW8rduzaakUZw",
  "key31": "3SYsf9hFBBhg12oM5DaFpL38euu8eu3XaQWmFD7d6WfdLJAS4QiaAz1UV628p3MKZJf5JeUEk1FKzE4Yp9fNqWD2"
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
