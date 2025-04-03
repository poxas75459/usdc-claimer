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
    "3Nb7CTXoEXdsNzJSUHCX7XF6wtDcHmJHM6TEoAThd2n7A8a5K7Usz7BTS97bxVdvAsQsD7kVBsDqEAWFoPrn96Rz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VhDpLjAbLaYzJXnm6e1FwKsG1F6j9xoWTKmxs1jtcKc5VdoYrCN64Rfw4QEnJaQYU2R9s65d7P7MngE7QKzfei2",
  "key1": "4Qc9beT41zGjtjV8oQ5PWf15Y5AeKBiQpbHbEnTyvgSAx6UDSeaqYAp7rL74Vk1QXh9THDDptFXAfD8xobgeeu7S",
  "key2": "3xPXhpvg3bh9rU4W6ecAMuXqi6m9egCwqF9LNscKQUuzbJZiSVrmfeUgQvzowQXvNhjy7d1bx1pLRh875o2WRUjh",
  "key3": "cikfBy41iNtiPbe64Fmt46jpDboY9GRjgYkWDxMYoSQRVbKr6iyEaAQhxXdQC2Xv2cpiWvetrUz6t9H9bV6w39U",
  "key4": "33dHQy7CZJbqu1w6GTMFyteX2tg94CsrMc1VJSRDRbntoES8oe86iazA2xmRhTSQ5JC7Ss3gLDzTvgXxWoLYGBhV",
  "key5": "29hCrk9WeYdGjhKKU7JgDBhzsEaVbfBiukykenG2KBWzNabQRDfLCCVwr8fyLxVfcb3oyRBtXYb4mVrTsuMtKibx",
  "key6": "3UVsJbUBybu2Dtna6bfYXnLB9UEQKSRwUU2wWWrzxPz36HjqpPmz4SwHk4Cn8eQuc7REg3qkZzToFm7pqR7GUEPg",
  "key7": "4Gq2CJ77A5Q7NSmnKp45V8oV4LeFeiwsyLS3iegLHn7bMxmNZXscSZ2Ww19c1YipDRLmtF1EDWGwYDFYPSoru5vS",
  "key8": "2CcvoTy4a1PBjm4SQ5LbKQsmfxYC9aviqvmyLAEKvFLx2tjKMrZrvSwQN7yd5RECW6CkZkeJkm3jJaH3NDy77Gvo",
  "key9": "4B7L5MWLYQdGUHsNmo7rcB4AjEsJVXNauja6iEHLxwDSmWsyPHsyfJytsNYVT6ZLZvFDPhtB6tLEdfaCQ7ycpLHi",
  "key10": "4VFKAGFfxH7RdmGBF7LY2xbyNMLePPKyVBxMU26YeP5exgQAUnnxt8akK4ik1EHgRkoaCwd9ZsFKaUQfsZ1exQXt",
  "key11": "2Aei2PtM2BLeev4NzA8Yu8gyaYJb2JbDQSrKK5QaJbpArDkrCqbyTVCNCTF4iNC4CiNynRYNLTaENouqofaSCFi1",
  "key12": "2BLuUfYjzGRve4bvYtq8SNxML4jEMZA2yzkAi7n6RTtaPXUitRZYXVZbu8AVLAtEHWN1CmZGfCMBLDMvj2YfLd9d",
  "key13": "4NFb5mkdqQAbYYyd5aFDxGCFhUcEnzAnusKcTgdzshPeNyFcFWzHn44rERKfdC7nS7W9m74QdkNFJVV2ypqzbVDM",
  "key14": "2FgUanHKec15VCr5rZFbhVQ2j1tKCMBqTH2wvSqgsJL7jcSn3AMLSDyNjfs7pWvcPuJkvCrwfC7pgHBXgf8vkkA",
  "key15": "nigxFhBSVSbsTBawRtYbctFUeJ46YxJdTxwRwcdRtDwWYNax5PoSnoVtqYYKz1MwefwroWh5kx9J1cxxeEBUVEr",
  "key16": "44odmVgTMVuks3t6D2RYyVf8t2JQ8P3h2WWK2zr6Gbu5HnAW9VxKLg7LJMfXis5GWvcXnv36jjdCnJb4HUfwzTwk",
  "key17": "5ZRsVbWWuZgMkzK92o51HPgNg4qButYkdRbLGkqoWwp8kBDnCnA9ivnZgDSk8DdcVEGvqZQpknVtkdruqyJatoGM",
  "key18": "4D54BG4KaXnk3kPVPVCPko4iSw1GMmpThy6ivNa2AfpLDF8rtWRoTae6A1cfiFkZSqCEKhT7F7i9wmjpug4FMJJU",
  "key19": "4eixKzY45rVfmVAdFyYjZ9yBPpDwSXwb1Wim7ejk444zDCS8sL7LoK2EcauUTVdTtf5YDjVf1wFAnYgKwNxYPhkf",
  "key20": "3geKh6sGyWb1rZKh9FVXRuDMgV893RysBzaGuQf8gmGBVgZJ2mwmpPrV2TF2BGitefACscjFZKNpbT9vn5rWhyRZ",
  "key21": "2uiXsNpXUJKLkN7cRQGnbuL4ZhT2wiPLVJbxxVFTU7Ke7ieKYahTAnV2vL37R2iRvV5YfJrz9fvcFV9okmSXF7H2",
  "key22": "5tzpjQUACWRXCk3r2WQvjKadEorNUhRgNseT3Ej2GXNRUUAvhsxmh4zagyH5QjUK7eRZLHvrk1BAstk6iCD19GxM",
  "key23": "iyhq5TXvyPckFvP6S4TV8s5reh8aMJgENgzsZoizygQfcc8LwhQn2LVtxCuDWC86jMN9ktFL2ZwenAwxsjNHLAC",
  "key24": "5LgNTfZEGUxghxS3n8zsp9zTFJUbiVS1yvdJ5AQHypnYeFZ47Byi9p9Rg8ingLi1Nh9T8MXhTdnirgjoifZ9NcW6",
  "key25": "4SAfrKsS97CJ1QM2X7A27JdoF5N4zqtudBhMt7NLh11bydaD6tFJZbqc3a682xz7ognBhDhZDoxCen14bqdgAFUL",
  "key26": "4CM1ypyz3zrG8EQF2dR1dGvxbDA6zx2GUCMf8dQ461gr77FMuste8NnxWEaH4a8bj1pxmxprr5XAzRaxuWC5E7po",
  "key27": "4TxWNeF7YrCd5opPoCKRWa9WHaytjYUXPSTRuQzXpT45ohPuwFnWRDtD3vAigK64G8qfaMPZ8iG3MAxPdHFw3iXU",
  "key28": "5Tvr9dTHniUvMXNmrb2jMAHf9CoU4WtN2gvMFkKHx28d8D8JXEHfHzqTfox2f8NaiyyTyL6sD1iaMRmraTeVFoPH",
  "key29": "tN6zweLhSgwYWXMNgnvTqpuA2LRKMuaqheaJBm9KTF4bEDSbUE2ahaWrvaTQ7hz99ofeMpEB4RhBFAWcWJNaBi4",
  "key30": "322sQQkeY1iP72v3s1KenPMhVEiR214B6HA5rRQydpcdyAkKeWTr54UNcPotLHfq1W1BHGZAxJ1ZWgN6Avo1xThc",
  "key31": "3TCRvnu3yQDLt8MT3ULCUMgrZ756xP4TqemDFXCUTj5opSUXSNcNoeE4M7E4pzYdhAMQh2XiSvAzs8QyRs6LNRfK",
  "key32": "5dhRzaNBsn26Ntfgsx8P2fCdAHZyaN87wFzHHhHpYWRJ7aiDdspdLmRecj65PzhBNFy3AbUkcB8PqrxupAn26joM"
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
