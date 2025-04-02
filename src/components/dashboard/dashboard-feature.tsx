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
    "4qMy6ezsbxmF3bZ3vmM9ZkaP4dfeqCkcsf3UzpB7LJ3YTwGwWAP4ebkRA1TKBkWLwPdvpaKm6JqTy2RYgEPTaqpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GZtV3Taqfu3pZ4wryBKndnCz84crjL3oUWRQLQzLDXD6DLaoCjw4WF1tEN4U4b7mVLfXNs9PsqsR3183Eu54YDM",
  "key1": "4izD55WmTXm287LNnRUvbWLiJcrdbDMEJm4JyDG2wwMggR4vydXyd5Cp3kBbqdTN3g4xEuchtCHKeRPr8BNjyEtL",
  "key2": "umNLr7axDGguVUu2DxmNAcSG5H4ZpRVzp1WfKbRxV6L4otmmQLjnCAz2ZFhGcPnosXKMeRLPmav11GNvcjwCMuX",
  "key3": "4acH51ck9Yh1waKmHyE2n5qAjTUTquWf9QvoCm5DCZHyv9hXLpMUdPVBpiZEcCWbG8yRpWY7NqRSREDDQpgNBZwe",
  "key4": "5qweCV9yabw4Y7uMY9NE6X997cL7y3yC2tRoTWa9wCTEaHgdMtyZ5rHHGaRipxsQoM83BuTNnRkchUmBJ7NtjcEW",
  "key5": "VFy1aKrQPMYXxQPhfNzxxTyQWKAUi8UuJpdNkeUGkJRvknJTRVazRH27g8Bap6Jv1pzUHADA5fjW5j8D8MmLAar",
  "key6": "26cR4sxUJrNwVSX2ZyYdNb3SyAd8owkbMSDGG42LLHUhKRwuxjTrHf1UMzmXinwMHPvnvMg8y2mzzE4WUHMktbWz",
  "key7": "4tXB11xLqA83aoHb2q6TvEkLZavR8efLa9kD4d4c5tkphMTx7MT8MXXxxiWrSVud8QnRx8rPW5awxrj71JzkjtDM",
  "key8": "4PTbB16z7XX6pd5tvi8KTzA21q4gqCXfgWaF74K8bRSVqWe4pA8Yk9qT8h2xNBmdAfLszzmufPrxwspL686DuswL",
  "key9": "31P4JgRkJn7rgwyj7MXhn1jvcMcxCfs6VJYNLPnVffHyHzvzJBf78qHWjZbh8SUuKuQ1W1aXw1RTHvyFmXgT4npt",
  "key10": "12ajYxWMUrKVDax5U65cikTjS9uL4YDYiGUwDE44srQhPkiTDJ5kYnuAV2APMJ3sisBWtwD1uz11YyMepEXzs4b",
  "key11": "a4Fky1Z1P8iP5xkoYj1u3VTZhJ6bqYTJJP2LhvrbNHkXxyX5t3pvboC9fYeboGpA828maRtN5Btpw5xHMmGKGJP",
  "key12": "2TSfdjTEr555Lz4pfcHehGea8eoYXDEh4egERhoPgm9jvWB9VNcQVHQaTJUTCcmzVt7ZqX4FPHx9Mzt4bUPG91EU",
  "key13": "4DVJyJrvBaMa2Tp2LFJBb6qsSS3D1FaFHuBTZvL7Ybgd3r7qvk9Khk9hMXunyCYYiRK3Vw6NhMvEvdTwixyXcb9x",
  "key14": "2oot8ttHK3SSezRug7kchUoMnjJWKfdUrcWsWEca7vRAM8YoH2EHYe7nxLJATQcdByqpsF8G2Z3y5crLZGjYXbmG",
  "key15": "5mc4NBvvtLFmaQRanDva48VVg2pECJzsL7Kky5zZ8joakDLpZq2hRQaKC2xumybq1x6mg53XPzWKknLQQf673LTQ",
  "key16": "2PFtaW5sBRywSGtZ4n2FBesJkEXoiAhtUgPqiHkgjVQf2NkN8FHeARZhk3LPSMVKbv9Yn5APgeYaM3W4P7FkCDjP",
  "key17": "4n9fztjGCMptQ1zDUu5HERy1gzBfk6T7yvCFevkLxoGChoc3Nqpt6ySToEw7GnxtoRXZCUjndtp1ZrqoSHTppfHh",
  "key18": "P6MYHSrcbGxgmQxHTT3amAA8ADYsTQTBXp9xwYFkHeM2fvEek8f2o54ZGc5QpdZgNLE868Wqgp7AWSbfUTNS9ES",
  "key19": "5aiZACrAQgAqsWNGVQCGk5wmH13RsyZcpLmY7apAW67Jr2y9HwAdeo4whw4nebEAgx6LKS9ugGZjryQGFqiLXQ59",
  "key20": "n54hXDNpDHrR3BS8j4vmid4eEduouHkfxLbJQjsYhLW2gNRyxggujX7xFbZoK7f4TvckzxPiivQfmRxAzft8gpv",
  "key21": "53RGMCwiVTSPF3q59E4CHabyXkf6xwtLfHZ66mgFbk3skkvPuvdovra5zs3yUjxFqUFYmdQeNBfDTFEYJ4LVCoU6",
  "key22": "2VxiGHbuqEX421G3aUSQt77nvm9BcozoKDwTf9Zjcpr2FS427E3HTzWdRCFmVzWv3FxyBKTYZyaksiNCEWNmXBQZ",
  "key23": "5WmC6X8bMCyBEj3VQYQbV3uuXGmTdAxtLD2uvxTDGpYYZtMuCgnfvY17wZQWddEzg5P5gTgjhPfoT6Bjv6BsKfT3",
  "key24": "4GxypiBEUSxR7yXQEeLm4rRtjqsmUbD1VE6f2SoUvaEzEnyr8SjvxdZXsQxULhUfdAnRtNw8CV824AfigyWcewG4",
  "key25": "ehgQ2utiQZaFRcYyVbjGHGVaNzmEKZmg5sFSkmJEY9DYmHcm8Qyuc1b2jk5GUcaqBHyL9ofZcLHwDU39B5HuSnt",
  "key26": "5LamtgNoDw7R2d61jv84J5Kibm1QP63cBhCZknRdhyGgtij13s79K8i7aGkeA55R4hJujALiBgfRAwvuUwwvyZ8j",
  "key27": "TH7Tfb9DbFEhUmHSwHJ17pvgiB1syVFgsx5G5V2gMkdt4vWRVv419cfS6YMTbjNKmBud7wyVXz4wyxe5BHbSgrU",
  "key28": "4RvnvaDCaCGxewex52D2AqVfM3NgtR87xCfVCdrGPZsULxPos4kinyw5NfX9VhxdTNHPLpjcLu1Q2CY42bxKiT7d",
  "key29": "3djuVZ3kL4fgcTZNiYzgPvBe9fExKHCWipe8M6WHqGnEmbos6TB99MjxFAkgzS74WUJnDw9KGX9pR2Eun3tFXthK"
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
