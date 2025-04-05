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
    "2hZiHN8s82S4QPsmQ33mVDnoV9G79gu4VyTKPznHnkxTWFkigUNfnVTk4nTQ2ahkahBZNn6gFCo6mPtRvANqYnPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ssLhDA2mpYmJuArLSGvjbWTR2Z7iNKWiBQsQgBBTmpKRD17orsJhPRyKGqQgDsbLEqMMveEXfKoBYw3WjWCWidb",
  "key1": "w7wvTbDhbonMMwkD9kzUszXvQFr8XAvqhQvr7FWXXMBN1VeiU3KBmr65pbWxCycmkohHaVCmBzaN5w44LWnRwBz",
  "key2": "4SLgKWX48TFxm1eW1WDP35SpNFfZHSrvuTuzabckYP5BEBd3wfmtFRWoKDeGif8HwooFeJX37XgPeGJiGgYWRUDk",
  "key3": "2DVpgP24Z1dxrJTkdpyeT8QwHCQ2P7h4E3527n9yeKw6uW39HYP4ZkXNTGrhJQvPSJ7aZdmhNNUH6eRaRecYrCvY",
  "key4": "uY9UwnQMYfLGpvzPj4n5jEyfFHzvGCbSSPr3NUP82A9kLXWjAVjRdqDVdEFhZvoUdzH3JS2KbTE4rbkkKwggz46",
  "key5": "34uzsLGvJLUH7dVDzWX865tZwQpWziYEfaKhmpBeAqVW5ttbK3gRZKF25QBsnNXwoSreRxYSz8j646McM4M5V3iX",
  "key6": "5rMN9QoFMEjauFYXRd7kHGtZw1AAVTi2umwEAeoQ3tKPkvTk53QXALbcMH8oFP4dPca3ihmNhYuqStvW4YgFxUT6",
  "key7": "rQT4kaqpSE7TMBj5HgR4ptReGsuL2rbv48FMSwBymjjo3Ug1vjD1wXgZZYdEtXTJ9K8VER9tzHhtRdCCYjewrtd",
  "key8": "5kgQ1X7vqjaCn1EJwByWBHesCGGaRf66rpyRhZZ83Uu8KWi773poc1oLPi2RmExduArkBGXjTqTNLkpJwVTZW2Ek",
  "key9": "3oGVjCF841T9F3QoTF3qxATZCWA8fjAbgVQ3QTbMxTRuWnMogRysRBj97QWsLvcgGYLrGVy9MCfYzWaPTuRifHV1",
  "key10": "3j7pfDNNuJmzqZU7zqBkmUbmFpu2CkVCcMAzQtfr9T8grsRi175CwVjRuCTBMnZJgCggZmEBRod7xG1Q8Q6167Zx",
  "key11": "5PiU8pxyBmEQNXmcLhLupN1YSFaPP2r2AMtYujNAUSVu4sjbvqeDEPvCeoMi7c3Jx1BW83bbNwXAwDWY6YhhqgqL",
  "key12": "4XLdHDn6bpkEU1ASpcAnvaLpSGp2W8HoD61tDTZgusRFCQ4CYZWkA7uKv8n3mhTV4YHt4z63yZSk35xtPJ8XVynP",
  "key13": "5MrpyvDxBF5Zj4LYD51Qce7jNjsENMoW9RoHMruVPgavGmQNfpA37BSHJQ4xgp36a4pGvyXi2Wfndmx4ee4AXpnp",
  "key14": "5dcdmCsDFGuttfocmtQsrvqSecu9ePR2KBTHzdSLr3huEwFMDDbBUAb48VG2BVcwerbvS3eoFmAzoRZFb6RKWWc7",
  "key15": "pshG2B2Ue2hUdWiddVMUHk8XDCHL6CuyzwMZYz41emAuonJzEGqcp5h4YehhwYmBpYvMhUrZJhcDc67u1v7GqMP",
  "key16": "2H5haTRSyowX37BtCRBdRhTn41Jz924kWfJsoHkx4VdDJeTRAEWLe5vXjyVa5zqj4PxxqKt2goTFKBcFkqv5PTZF",
  "key17": "4E1sSaD3Yahp9W7ZjdgemvN17RnyXgiCf4h9z5dCdSLms7jMdU8PmryapMC5Wc2UMeUajfoaENqHyat43qweAYBH",
  "key18": "QdCMjDAmj6h32VucVfJDd6gYVs8TYLVk2edxMVAbhKttzo52C8CGeq3feFLfEpKTXBiuPpijFn8dtkujsxuHWxR",
  "key19": "3e2mZUvzYo7doLn1HPJGCKybsLT7WAd8k2ju5n9w89NqaWEAPSK7SaTqY6vv3wWhCBjyA1GrDeYCKPQ2Z7S5UV8F",
  "key20": "5vf57dQT6Jcc81NdSqG1ASiJXvojEq9eAq9gwbmhhaKb5Hr4WCLhDKirNvrip9Ex79wtcEZo2LAQHuifEzzE5mdu",
  "key21": "4mDna6pPQ7gsk51GE3SUCBrCmLgRwksmKutQEqYChqPCUL4KL1ws5ZoWJpN9ygy43r4tLcEms2thiMH4Um2h6Q13",
  "key22": "4e96VCqSt8SkZ6FUkqFeom6Z1XZMcLj1m7P4aLSifP1pzWMbXUSxYBifLqZMn6DEZLNLVPjWiUAcvEfLnEYLFMjX",
  "key23": "ZyZWC71PjHXFPBRtREtPdreNKDWwP4LJpiF8bza4WjGMSDckFqFwC4GusVd6KtKGSvRDzycCKyY4BrR2t9trhqn",
  "key24": "3z1phWRRgL2NRjnyThphhCvCksNZWGLHGhaCdnLbTb2mgn4Kq4xRgNx9Np6K1URCvZb4VnzT93Dq97wAEafJXaSx",
  "key25": "5s2bVwsE8k5SvProB1n53Xykvs3X6PV2Brin9jaorNDQLL7Y7xarUm4nhyUYRtDtwu6q7KWQfBkqJir2hZPbF6u2",
  "key26": "5MpKvfNbTeKnZbcEUV3zQK8QJ55w8942o89M1oit6bpqxUzN2YZoNvT1jn9zE4yGsP9mS41aPgY396C7MTxr8yjJ",
  "key27": "2LUkmCNCG3UGgXmcATPFRqziFfAwLr4zAWCdJb85Hva9p1PyMun623orMojmXJqojzrkbR9Cy6A14hwCcAveRLVr",
  "key28": "5SwLYXFkpa5CYMY6dnaCbkN8jGSAHVG3d1PSPbAtDsAkT7KTHb4kMBLBn9ULVKY898uNxpDLq5TadtqzH7gJbN7P",
  "key29": "3PkaTH8WKrV6uzzmBmP8cVEm547kg2heqMTmGg1LMsnwdsfa2J2maJmXhxe7vT4KrFuyXrdm6wx4RkcCiQBfLZSf"
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
