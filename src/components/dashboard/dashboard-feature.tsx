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
    "47dCeqHV48VGGjrto2fMd7qnqCKEd2g3U7R6n6XktHi3gBpPf2zJWsUdEJhps74He6ajFnQvz66yfd9j353uXRJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HxUACUEKpz1hrvUkcosHsUYT4ospfUavMTCYb158crdFhGSn8d5pgcjshiY7DvRApjUbaYNLTKSUFxGjwW9xL89",
  "key1": "5tNgstvKtsDQqLe1Fd8ZJKrkTtKeVbLR1RsdpQrXJA1XeUmfMmR5j1qDsGX6RbVCt5nKq6Q1SxEkFJ2HhfKW3SkS",
  "key2": "3MzqioTcguWKxu4LoWj7Vp36zGUUDkTUSSYD7hjJf8JAhgAxQo3SfB9NKQgiP15xdeAdprbTmpEC7PFfS9HstvuV",
  "key3": "4XHVM4AzcoUc9bhjVt8LSsgAKA3rv57qyAo6Eh28MY7yBgTuEo3Doxb39NQzcsQq6pQwhywLA9qY7XVa5g9LbS64",
  "key4": "3At3iCF2WmNmQ8Ksymm7g92C1vDJaVFrMBo1nkvt2Dh3iQPQjLakGFbreGJQ8aatthJeg56FpFgh3DeUFE5ES5k",
  "key5": "4uF6EjvbBz6c4pn4YpYfPoSc1ACh5Rpd4WpNaobZfz5kkrEsrozs3HQHtE3ehVH6hy2vMcw4WgBdLupjTgwp7diR",
  "key6": "35bw8qaXybBjmAyngqGVA4iMJTRwtqZiTakAxGJkV8rdLafqrL2kpvjGCcZFgV4zT8nwMz7P6HaB4HkDVsHJSDbC",
  "key7": "SDNkgVAh1PHarxYQ6LDWe7tNpeYvyFsMmascpf1UA96ea3a181oAt5oCZ3g5ruWe5fshsFaCs5d18HtBDZc4aLY",
  "key8": "5v1YBPGNybZNbcP1SApUGyQgvj83RtubSeXC2En3W77vEQLW8Ktdei4EXjj8CVempmc58msJfnvwkFeCEtUWJGss",
  "key9": "d96MMh2keuZo7WSi9aXGtf3CcoQAfKweSzAbxqBaaZtp1SgL2oCMHdKBgjmAgiKwNWaJiRHRnNtxdeVmipebFx6",
  "key10": "2tkNUxVm15dwSaUmbgjsX1X992SY9L2fmEhSRKpny96RnSzTq5aaxSnXxmidQJRzekYZNaQxiuzqRSQqcpLeA2Yq",
  "key11": "3o2kesEJ1C8eZ5kMGt2YpaccpwihUSLssbFtAhLV8ge1C5Lb3BmnbbToJ8ZZJNNhCZc9chHCQM3ewKiD76JrnPQc",
  "key12": "2p6SXAwYgEhbiAMJG4eWsHo3rshqSJ93tYzj8Dgb5GEd5BeXJB2BiTMrv5RHFJz77yK6Cdx5am7GdCgDTJBBn6Kr",
  "key13": "5n7PrUyr5tShYZHsbkuoqFYJrcNwpv5xnkfh6LXqDY31VWcyXJHMvgyYvnUpNgkhYd8MMuUhqvPcEAq6vWMTkmpm",
  "key14": "3YZDM237Ys2uUrnBV6QB92iD3LQxMZz9LXt5aw7SQ8Sg9VJCvJ7MSjUDwjcNP5PUMDueNZzpgBaCX8iUhexprY6d",
  "key15": "66WfJLCKsRMLgtZ1r1jhxmFHjaqpjUS66nw5e2HjBB7zRWFyXYoF6UxvDUPKsi1qBiUdZwnaRUwhraWPBkYv5DNJ",
  "key16": "44wggmESj7adKsswQSdNdGYCv5AckB726VymBrTye6DyST2W6rFP3mjRpbppCxcDHH2GwFZawKzoJyZewXTU1p49",
  "key17": "2n5tZZKJNeRocLsNsg7N5W6tWznLUV7Uhye185d1meRjfHpFqwUSDKBSS8qWMkQCjFkCaytZh3c34fJAAKDfiz8r",
  "key18": "2JVt2LAfnKqnBmKEqLUb9xJRohvb377SFKLwV8WLJyd5N3yMtQ4wbopQaWibfL9e1mNnhopM6cWdHLM5BrVSZViN",
  "key19": "4FJ2cEZWp8P75XJdvwQ2ybEHupsn7zzWkf84QHiUk72usxtE8htmhqkUXNSxzfVY6GMiuwcWnPiecQRyQqWQVSHg",
  "key20": "Be7cbkemFhnUT2JkEqvDVDGuk5MMBr5i89PJsyposJBn5XrMd48TzzkGM8Mx7jFMwmQRLFsfDDez9EdUNtZfku7",
  "key21": "4jPZqrJLiQRnRRFY2W2i3WZuWtCTbV3HABvk9w9K2hadn1N6U4aTTRXecmfRueB2U9riDg5opExHzkVBK2wYQ8oC",
  "key22": "31REX8aFqTswD25uASKoMiJWtRDHYx9dxmpGZeGCBiaNrCmtKRudNwsfkPmzJJth1gQTPhR1gnzSujmMVW4bwoFa",
  "key23": "4fkCBEhdkV5uG6LnF2MztKSfD9xjV2CoCDyKG6oKe9wexnoWJGfRDRhGgV73x4es2xS8z5MSbn49Rm13GcEHj7cb",
  "key24": "3FvZSjkiDSRCw6UhkiBvaLWpQScA9wmCkze4xx5H9V9VhkQTY5ZWZ14T7e1HdgnvtK2SQtrESL7XpH4wG2QvfoFL",
  "key25": "23ngCAZzLRD6S73WKjLLt38zESdt5HHLu9qfF1azpibbSxpAG3dCT2553GHeMTgBSnNrC3Gh5GmZECKL4m2SNPrY",
  "key26": "2znEzzdWBJdPGmVj2uuNz7PqY91RqTLY6UxvfN5TYL8h6hvMcerRkjbSUrx3SxNxtt8TKPicZsJF2PSYFK6tgwYM",
  "key27": "57j7UhkMowssEdvMzZn6qSBbUEUp5choiqpxC1wkKikKQgYUP9dWGX5dZX3Y1115Bsmi7eYqG2nEpVPMmGdjmLUg",
  "key28": "3KCePQmzbx25AdSHNY3uuSHcPNu6FeT2RX4SjAdm6Fht7b7NdKceQeiXyXM5DbpwsYRuiwd6QTUHrvkwkZeGLtEh",
  "key29": "56WNCpGzvo14qxCBwosgeEKF1278fq2Qxj6j6euN2Qh6DiwzC4cnkbJBgygzNcaJsyMafhQbZkDJ7Ss4qoiN5w1f"
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
