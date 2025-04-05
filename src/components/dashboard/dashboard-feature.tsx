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
    "4poBHw4FpWiUKMayiC6mztuGSDiSt9UaQfVdqH6yJPiMxd3xd67ToaMr2XxTfkn7Z7m6iXP6um9Lr1wtskfeWwZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WYRRZ18VH1fXqybRBV7uaiVmuu6Vos8rN9D97nvTxDgf6T3Z8u8vy6yC5A99TVkpBE5oPhRBje7izLFZMvxh6AW",
  "key1": "kn7kGtVTZgugdpTZLBeTNc6Sa8dVRL4AuaWsf3m5bAz72kwfNx6gey49xqT86YENNRQcfPiay3WRB79Pnff4bZg",
  "key2": "5YXhDPUrXmtdny3zR2U3g3ezSvgW5GK6XRnUBUeFvzQERgKbm7xzZV7LpsU5J8WjUiQhhSKQar6TiQFnaaoKC68o",
  "key3": "29R1CJpDHL1ZpdioPEcY1CSf6E5PNxMYCtw7CTHqCHdggyNEVc2FGJzoL1YgM3nWKfQctxX1RKoZ6QfjLnGc2hdc",
  "key4": "5ya3c4QFDpkpRuzDRsh5C7iA1RtgYk9F8CoK37jsfL2MvyG6p3quxXE3jtU9DV3KpdHLpkkR4NVCCXXhU4xXJHt5",
  "key5": "2unjV1L8RodroAjptCj7HEfNP1bYNEBjz2x6dqeFQdPy9ocP9pVCYR3PF37LvBepsju54SL4Vv98aL17cwb8ek2d",
  "key6": "2ZKi2nZirzmsPrWqT8TwoevYbQW6zf1sv2r3PcDHfcf2brzLnsce7Mx2MDVpqLDna77wRLfWM31buK3D1sG7L8F8",
  "key7": "3nNFjBU49fVCTskLuDURGdWHdpJDRbWeYVpVyYVJe3q4Nes9SFrouLe2STR1DXU8pQ5vNmjXhgyLTYQ31y69nW6V",
  "key8": "4b8QrZ9CdfuvTaimHPc63mBkZyoffK8VBMaT3QFFZe4uzmoaBiTQhXp3Qc5dT3aimzvmYKxZZJkDMKWTV1TQktMM",
  "key9": "41EANee9oR9f5bs6D1ajyk1S9bcFUgvz9PmFBAd4bv8VXPduArk4wWWw4UyNnFct1r58kztwtGpPFzVurfvZRU2B",
  "key10": "3CX7GMnzemGtEBD6hwi36noL1VNi3dJ3mmTbUeFkZKuZjivkaafkfmcjapZganxZ7cuqUgFy7ZcVnT7vX5kFo2Sy",
  "key11": "3vhSXnmcJYYUhmLbK18GtDK6bYGfQfqVUssCcs9XxxQRbZTQP4En8vs6Jw4HWe7R1aoEpvk4Y2ST9ZAafRHJFYt5",
  "key12": "ckVHyF3FQkpj7B2knfEeeVPFfpWzj2HJ57MpfsvUSxyLAAyqCqt3oVtkYx4KUekby4UVrKZ9CD3ExUs1FNyysYn",
  "key13": "3uADbh8b7cvM2kjguyTHP5n1QdfBP9FNuM6ytu9uws1Tfvy543Jqi54pkR5iJ6eJK27SPQLAAebU2mvKP5FuMPqn",
  "key14": "3y4ZX4WrqKzQohnVXZDjCpVVJiMNWTcqcrr8eR5J7eJqFNpJnf1AcoAdsjVQF4yu7wjUppKdg3Ac64RjK7dTaH7D",
  "key15": "46j3hapsGyRcunPbCrc63BmJAtph3Pp8sjsFEsj4aBs5QitBw3DHwJ25mdaYuLG4CY1nsrXr4K8tpGg9FrskWsFf",
  "key16": "3Ri8d1yaeacABrELHX3DuQRocrNoj7nYHxfiLmzY2GuAgQHx9v2RKWNBxxskPkdRxAadX1Mk7vqdQPvQd76FDGFb",
  "key17": "nBgVNi38avEHKjYpSb4ZsdgEdsWujy6PmbAhXBxkQv4MpKonkB34WuVPnprgcaC1NWorD8Xdhdggp2UhZXEicee",
  "key18": "39WVhy529dJAG5FwyPuos9Lnj2HyTFEvo1baVopagRj5mLqbbg1b32fKvbwJPcGyhYWqhFFDqLKcfP8SQCyJphD2",
  "key19": "2J3KLwAHGtPrncgULE8vv2Rg7R5jcLyZoXeZLs9ZrnUVe2SzkXedaEJ9HzkGtrooK2NWZMHovguzuveV6GUSxFtS",
  "key20": "fHa3xKuAvKueViokDRkpVcZd1eS9cbtzsadJZPj8kDFFrPhmpZo1Zzi84WQsUpxoTx4qCV3rWAHdPTQ334eJu3u",
  "key21": "YsfFsumYiLzK55RvNymPb2SUdYfxQmePVUYcwxaQuEAefyCXyaYfp5NJvFREfnLrMDhKYbRXgBRdu58Jb8axjsV",
  "key22": "5eq8x7UrPrq72dbdEy6LqqtokLRADHdzzGg7rVkd7P86U5YEumunmM7JvhS2FmYArSvR2xbyaRgsxrh5swBcRFx6",
  "key23": "5zVHGY3JN7P4XPUByhQCAQoWTwe7Mfic6Sbn35W21YbxHFNrgbLyxGBtRwH9AN2PDBvtSftWgP4w9w4uVUVGXGTD",
  "key24": "2ozBamqk1ChC8PRDf3HCTxgQ5PqFPufd69iHqAHEUcQXrYoMXzWh5msfCFXRDpR18rZxT9tX3FSg2vKjriqpBFc2",
  "key25": "5NjDbyaFfM3szHZtpJHoQU6GqQTUHtEF2AKExmmVZCKRR7sYRoB4vpK93MTAJk4oDgoScVTaPp8gcMm9Q6V4HBxz",
  "key26": "NzNbRaLXFTsiVSQnNo2DoipuFChpDe4yASSG6eMMTEHzdeKY71zVbTiDNoKGM7DLrjCRhEThscW8scAnKBLpNQX",
  "key27": "4dV48Hu4xq9z5R2uR6TCSrL27FnrvB5K4rRbmLYrj9XFVFF43AeLikXdFtP9csuoeW9mTkrc3RhXFZCCS6uhyADo",
  "key28": "3gP2yYixAt8aPxVu9dHjBGihPx9dHWb7up91zB9TmjKG6v7THaJTH81nvNiZgmy35WhwZtMeaw7c16abwyhy22xk",
  "key29": "3Dx3qqLo3sZ6Ay3iZZbbVm11Pdyq9x2Vr9zNBsb6mspKowkxyerzTTmcYFWMBqj1cC6ZDvULJBuU3R3ZiLXSmUQy",
  "key30": "2t9QJnuidMQoDu3GEbQQJZ6kxNGJujd2qijHdqhzxXzyuMdw7JXqFRtVjFo3F64PQD5mywxk6PwmnQ8v1gfjoAF6",
  "key31": "4Yr5QY2vx81TZfSNRgjpbZiBYhx3W9fxfUK4D5JJUimHMBMRyoeqiTehAhkYD3EKTjpH7XnxiRagRWrbJj9pEQhf",
  "key32": "wuEtkeFnsdfpdsKGSoYLzbzkyPj1o1BNvoDmgJc4y7E6MePoHQrjaUG32wu3FLjHgboV1Ze4cti84wRksiF43Uh",
  "key33": "4LxwawGvr4NFqyUdcnPhW1sGunN1ECosnnfrxAExqRdkag9o2x5S6nKq3LHsfeKYCveNrqfaNwdhqrK3BBEGBexE",
  "key34": "2A8EfPFvj8XxXo15NCrh91Gbcytxw3GFtCoi6FdG6nyKFh717jf5YhGeuCbUfYK5kt7f97SgQDEVTe9FKUkYctdV",
  "key35": "5xhZVnv7t5Gfyw6KQiF3Douc9MrEEqbg5FUy8WhTfjcMYVX2A4JS11PeXTUJrjaMzYxNC3rRuXrEUKmWLvmx9Ug",
  "key36": "XYVSFi2rZBN3QeJaujhJnHhHxfcJWfbGxpgATcB8BVYFp4TpMbk1HojYhBWrwdhVU6GGF3F6CcKmceVBxPQvfoL",
  "key37": "4CPVtgWwbiNPhzyK24fgtUmUtFgEcS91iubgcRSfDbediYFsEgM2sk8Y5qHR1wYJfKasUL4U4u6fsUiJoemGwpaY",
  "key38": "3jnVWrWwPnLhZHkyESMdP9Reut8TbP8PTR6NdBYVkuFCkUnj8a6NhL9R8UtBgFLqVtoyVNuRZwhpAf4WzJPvLxdu",
  "key39": "3N5war5pqH6i9JsT5PpajtrqmxALZBo62qsX5GKRRvGSfnNUthT6ivhw2k1222c7RxU6E5pbA9RJSEpGuAUJDRJ8",
  "key40": "3wGqmdfZiKhSNYSBHaDPtUfmmHT4EZ935YK3XSDLonxYoUeaJdZq3xvcNUf5aXGwkDmFqr8Bm8Dnjw1Z67NcXbhD",
  "key41": "5YaZhaGR1DhMQAZkmPmDUxppaBbN4vb41bJJ4ChQ2SZeSsNvvZ9JUxAnKo1sL8Zr61caNWRX7ygj5uprCxYumAyd",
  "key42": "2XJLr7mTNN9j9nh3ounadxq7jhL3VgYtRgVtbvB39ozWFkCSjsYBW5FqoecHoSWxPkdMWRU5FtuyKJpMVEpDxb1y",
  "key43": "45j9owgVJA2oTYhBqSUKaXf6HRfi9PsWqdQN4sqjYSigaG8wEuNdjTA5HZojNgUXdaP5k5fffEsQbDJ4jLc2ntZ7",
  "key44": "4ujfgvEJ4uzKEewaVWJzKtaTyire8i2o595s41Q6oqsDZM1X2QaguGWRVLXDogcHAPcUqjmuRixftpuDQ8UkRmKG",
  "key45": "5YXRZFXdMWmZn4pZn3Qor2P1i4xdw3d6Gc2yFUF9ncbHqXpb6sQ5cvbCNWidLbftcLw7DyLrqQsBXkYg8uFWesvP",
  "key46": "4FpX4jj1dNdHWNjjEY7ZRZtG8yataDnUGge3A1eWqiSKyMSR7vLH97tQMPRczu8CAZbGTrVhSkdDnoPuN2RSV4Xb",
  "key47": "kCLLqpZ2rdDQqiiNTXfBXYdt9bGYycxSdb647eAMrMykkiCVsusAommxUDiBenR8uSmHwHUf78Jardt9dVuQj6k",
  "key48": "55uuKnqguCCQuARbZ27UkQ7rcyC3ng7fNRRRspDDVpsdyBxveLt7JRTPLzY2L7R6MBn7gFZhmA6w7uPuenMTXdFc",
  "key49": "2ct6JyQQu6v18QPqp4ykqjqmEiMK3Q5u5qkyznSAZ7dYc1JXC6wbH5DePyHSYAtA4ZexqpUKiwWwQgvChRxKju3p"
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
