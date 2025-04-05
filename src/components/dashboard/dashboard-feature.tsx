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
    "4FygRCioFCqa5osHbpgMgJtNGUiNnGXnNKoLRrxEo6nuADZCKGWHMd62DKAfGtYVtaggRWhBUbFHDNiZnfL7RH38"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C9xmnG94pwovGRmywC7dpWrmJ4ZtM87QgSoqoEDocGgJJMhUtPgRig6S6VY68KznS7VV488eZukf3iNJvLvFLda",
  "key1": "4pxNgUkjphaUKs1FwQfQpyTPa5moFbLbJAAwPc4wmSea5LN41139EQzWa5iwwmVHbJDygPNm7So7bTXCESMfFMuJ",
  "key2": "23mPsZ9UVMCAQTYbkpwtGJZcuaVG27PuoPC1NKSYkcqd8vpSY14Z9bo7ZAayv1DzG6Pk2b1rydXdnEPMzUsTdmfz",
  "key3": "2N2B7f91QzM9LH9aWYtQ2S7PErgAsg8Jw7fHRNkZrKP9vQPZqDpDg3hrnCD6pMgeKmjcV7XZLRBLME6wYhuYQZ5q",
  "key4": "3YwZ2RWVFdnFaAeFbYzTifUXKvAAQnhD2uakU3LmX2rPpA4f791g7UKRU3gKS5s83RWfLRU9W59jjsaNWNeH6QPF",
  "key5": "4prUjoSswsFadurX6D8es4myHSvdkjimAgeKBCPboHufDFu2MiyCNFavvqrgCurLMEAjorqBYu6xFdDDnYxEnB4j",
  "key6": "62XmYDR9jp5rxRgybfui8gwZALMmRjvp3fS3Uv61qYGGKzhSwEdtQaiwDXJTG3uj67J8CJQHMs7z37gpNeFfF6BV",
  "key7": "5K7TdZ5gpXsUXCugTZ4xn7wsX341ZGrFZtp6QD5ZampGAzKt1bJeZbfivheix848eZHLxiThT6ceXPrSvYy3cvvS",
  "key8": "3gAuMYXNAeRoqsazQLwA3bP2DHTL8CtZyLfZXrAbKjCXvTok8Cse8nTAKmg86aeWaW3DcGPPRCustek1aBoz1FAZ",
  "key9": "3yPNLT8nMJaxrmm2bADc8dgLyaPA3WPEvfvyrPXP5NburMHuXkKAhZ3rHSXHWvSSGv5sx9bbdRgRPscMdEdCD6VJ",
  "key10": "V3vHgJPs9VFw7ZftKij5Lq5Nhtua9VgVZR1A7VvZuJD2Ww6SexJMaNooQse6iM8WRMDkNYNzsiU9sEHGrzaJ7kg",
  "key11": "3y5JMjsnov711pdjLp35NbTzuFC2wcRX2Bb1HWxAMVU2NN5B7zVpn2QeTgbnStbT2ayQmoG3APm5CVjFvCYjPgKd",
  "key12": "3Gmd5GNgr7c4fZRHhrw7Bz6s9tKVpKqsNkZpF9NTx6GpsqSP1FCaAGGjMVFbTasBJYiLn2CJ2UXtudj911MwnZWc",
  "key13": "5WHdyfkHPcZ6aqfStNu7m9NwtJtkoYWSiSbiP3XkkJkbXh5udkT7pkMxdzLuRNiyQTL2qJRaEUKobCdFCCMjyt9F",
  "key14": "4kPY2Cda6e1TuGzeXPbaHo9DTDteQ1jDaMCcuxAS6mS4c2sXVfGZMaWENYVPzoHtp3T1tSWLEVctygzUMEGyjvfK",
  "key15": "myAVpu2Szrm3L86Z4FTENtP5xnX7rbc2Hxm6iHtBeKBPbrJkGPhHwwEUEbHtthAFy8Cs2V9b2bnb8199czHTiQZ",
  "key16": "2vNQow8UBZuooHnGu4ihEXq7Sk1tWzAtYDcpBsysGa6YdGLrWiW2WjQNvmzJzSY9T8P8KEWr9RBDrSvYwFg5BbLm",
  "key17": "JRvagy2XHm2xK2dTUWnG2F3KDWT2zvqm3FGWP3RU8DHFewSpJfUXWXwhmqCSKzQUorPV6Zi8KdpwksmgW3CDz18",
  "key18": "2V35ggbG1UiwqRTMDp3optMjiZovobWi9VprCfM6PXPmFovJyxsccWRFe7yKFnap2c1jRyULpjcsLyqe8XRLz7J2",
  "key19": "5K2iHPUkRNCUk57sMjW2Yc1wKXcpydgf9B3ukfbqkGDELP61zjmuUDAedRe4NZ9PMrde9Ezdd3i8Kdx1cmfxvwym",
  "key20": "3PuqTTLQBNULMAi3r8PcGumtZihZ8KU7hEmQ4vCbCbPTbTxEgWBkM4Jhy5UgPacPfWLfqzyBWsNiiJ4GKTTewSVN",
  "key21": "219KTuw4Vwpbqfpz5s1wWdCipMtqd1qg59DqSNKAzZWzk68b2bTsrPLTMqZRYuw3H3aG8bWmhsugE4NiqQyiXnj9",
  "key22": "AUtB2gctP3FrmRLGAgqm2oCaQQ2XDYc7A6m1mEPU6PzwzMdzRMisjSGdfegA27QXxpGvCY5wfQS3KHv2m832hiJ",
  "key23": "Ey6sbFMU8skSqJd4PsMVxuYgbS4V2LThJVs1ENuh8y7PzvYs3Z7v3QTiAqSeTXShvMqRZnyh23VWjE7e9j9KUDs",
  "key24": "2t3T7xfDagfT85hpXYQf3eGxiNFU9Gxd2w8VYmx68YuX7zRVwrHDNcaBSqyPPsbVXKfGzQ5oGkMX1ZZE1WM9P5cR",
  "key25": "3XubV3oWYvSidhCCfcZCuDKMzVKeThSSoZzeycQmF5NTb9rFnjXb5b9sems92CB1aTQbd61hPJw27sL3KMDzjtkw",
  "key26": "5KYTHnW1coPctWnrAuogBw6tLfL3Ma4siNLrLUvRacZ3W11p1gsvrmagwjZLDvbFNy1nrSPz3aAsJhk2VT3BWQMY",
  "key27": "62Fsjoi1fYSibd8TcSqQpGuM6BJV8weoBwdLZiep91PGsp66A5bzCAaWrhyaoZ1WyNm85DwqXHDYjZar5qiqjmJK",
  "key28": "35Qg1QK41JRrtDBkxMk8bVap1z4MiH8ei4vx6FTEJuwfSLBczxSXxCGQBrs5GYRGE3kojj4RT7tdpFqFdwY4F6h6",
  "key29": "cDPRzm3BY2vNRs1WPXD119TzjWhMa4xAjFhPU8s5RBpGm7Do4Z3iwVv3WVuihrDtLyAsTdfWte7gFtfyX9Nq2W9",
  "key30": "5zAqGhAfijEeWqQvGWvYRrjYdi4BYj26MxuzrYpUk7zBMExjskYCxWrn3P5utWh3WmKzu4k4EdHfSdTUqwcxazG5",
  "key31": "5nt3FThwoWqr1C2XU3YLDnJPASWEYry5iLeT8fW5uT3DEhbtAkDcFj3tBZZ1e93WwVPtSWUiKpm1dw566zgKfKUg",
  "key32": "3hJNyytoSUm7GyTsJT1WGbgEbmcoaP44dYcWVZZKwiomR5FJ29MJbSXwKT6Sj7BkpbiGWDP6FXbxVLZd9svmGRWG",
  "key33": "4MMkwqzMiCd2oe6NXR5y8WdeFRBnqxb5xkdg5XnnYLvvDMFxDY6rqQV5dHaFUJwbCL4ZqY31YpFQCtAXZbXKt7nt",
  "key34": "5EwSxLbc51LJQESDpKYFTYXpgcuU3P3haAWo2oyL4fSA8kXimbPRFpsS7cPByMvE94wyoWrn2zeEQ8VDKESbVVqw",
  "key35": "4Wwx4ChzuPWB1b3BRjKkNipNQmZ8KWRsKS2gbnNoK2PcadJ2omDUTGxbs7KdEMfxZRCrgWJAaqWfqM4VtqYMLAbV",
  "key36": "esrMzK9D6UFhBjAnuAzUP4Pei2ud8ZqYmtsWHe6RYB4xUdZUigrYyTgfgYWebDJKMRf7zhNSq4steLhHniv5KmY",
  "key37": "3WRQe6d5BZQ7nqpRKumJTkqY5fY8i4Cfn28SY4vp99GVZi6N7CwsofDoztrRPL4FhFpKREZraDGsHVzHZt5cyL2G",
  "key38": "3ivv6zYzfqUZAfdVunHDre6izGqkhw5wNGrpy1AYsnGyfy73X2jGA2e5Ei1vKQdNpkTSemJ7fAJGvPHanA6MVA5E",
  "key39": "4ZDkPURSrLQA1qCFuvtyzV7516mKveN5YNgKRiyHvtVAEpKzrMQej648rmwteQg3XvEDx1QjFcnQn2t2BcxCmNz7",
  "key40": "3faGdc6Yt3eT5GvMdDNY2pqHH3QXZ9xSCDydHBgmoDEhHMGYkgaHQovDNGy5XwLYfVH5Qmi3rbvrWSn8r3fMxFXG",
  "key41": "2WVVEgZv5qW5M1qYPjcj2NqY4YStfFkuDoyCgcCZ4E9ihqZBeUxG3ooCbN6JBizirmd6LpdF4fNoxUmoSsAUWejd",
  "key42": "3uvUfMrKcBysYE7eybWETndLetB3fT1AH4kyP5kTCjHQiCFUQMZyqu5iMb2XfdquJ6igZbjddjuJzFw4xoBfpci6",
  "key43": "4R9jnSKgpKjAa8vh6oe4oFufEmeujkKAjRYaQ4XxtVGcaMfAZpfeYXdiQLvpFQ5DqYzSSEKf8uvNhLPyvFXPE8KU",
  "key44": "4uMdDSTTQRV4R81Qz3jUjKaBiVrXQPGYQqtJoDjpJpgWx7tnALsYLD2JdSe1K2w4duMxm74wpEXY96SptpQZh2y2",
  "key45": "56SJCtJP6gRgsCaeKj6fLniwi2LCWy8yS5jgVCjhkppFtoBvsjfnhGS27hyD9EvJ6f7po7TmVi5FLcotvfT2QfVS",
  "key46": "2BL7tzysBPCp6WBWzVkWm1UFDwpRf8F2KKgLfDkGpHSt8diBAmgZrdeKWFTwC6BsNL9hK11kJqj2MQC3PBdZs4wS",
  "key47": "BScUwKcmmdGf82ri2TZMwtX6tvcH4JWo6zmhZFJmcNKiaUJN6htFirYETsCkM4czgZJy9j8Y1HobgAQGghwKNce"
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
