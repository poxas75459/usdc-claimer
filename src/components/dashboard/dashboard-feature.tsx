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
    "4SfmMzurbHY6ePfp77tfvFPWeCzcRj5CbegUhsKBfCotaPKMJ3wocesN246XZuKPn4LuNeaKhWr1XMCky1dgUG78"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r4Mndo2Hjicr1SP7BCUKhQzoqFSWGMLRKeRUuMK9uNRW4QrnkKyuTHBMoRFBBr1bJUN2dyzmi6EqxnGSKopCfaB",
  "key1": "42UZYxhChEtudKwmFr95ARSTuFZ5DWjSAwLp1YWJa6doZVGp2PhxMyQ1HPj4RDjRGXf1TfHUkqaWZ6j55V7RZAc8",
  "key2": "2GoqnzrFvR7wEvSSbNRi22hBM3nhJAgAY4nGYQdowm935iMZnfsWMxPj1dAPhuowUZLfCx2GXaBZHFxniDN7W1rQ",
  "key3": "45mybVPNpJYk5H8XkrT1hn6VsRHoq23vrNBwPyyQYrsKbNpHKaSmcf4uis3xPZjZ5vikAURirrawFf6x5FunWZ3K",
  "key4": "h6Bwsr1nmfAYTrAag55r2gmBVBRuCSniHuuaDzPDBcT1H16KeQxpcVDca89DogFLSYy7VKKo9PMAV6px7sGVjhn",
  "key5": "4NQq8Ay18B6mJK26fwGn8LC7DRCkMAH8p86AXhdzcWGKFhVRspdVACwg3TcN3624JxohU6v3KYxkuKRB5UECapFc",
  "key6": "43MDZvjSVxsCwT3jiDkt8eJx8GfLVK4EWFnCtMcs7bPSD51H4oTQvsL3npPZmodUhJMrtAVaV3VYR2rpsqbxQvNv",
  "key7": "54mZGzYSjT6WQCdQkpuovs38GNBw2iKMoMzgh2Sk8cTcpHbaXVdSnvXgegZxWLepGwSnHNCQYn7MYi5sakpp73Eq",
  "key8": "61UstEdjwh3sRuzjsNRBnBV5Pz4eiqTCvFWFgwpcWpfSw6RbwtPcs7j8nB8sPP4fLKmpq47JpdhBDQqN3hyVJoQL",
  "key9": "5NNn8qRUF2Qm68hmMKbK8nAjk4pR6z5yeG4or4jxHCuF5BPnopnp3r3vmEFxf3np72Ez1FPGWRvzdKpnYtad8MC1",
  "key10": "5RXGf68PufeYBr6MBF33hMTtymdofpFd9w7dkJuwWuSQq6XDR4t1XKeofa9EYofM7AqoNB4MQ8tuCnCnuymMSc8X",
  "key11": "s2Ci4Ah1JSYyNK5TYFgHirHHofgsvFaAVMTTw2F6UfFMiPC8dcbTt7GX9AMu5xodhuMARiGDw5NPQX91dHVEFYM",
  "key12": "2R3fEoyzYhBDBgLBZbTGaKtqaEYBF9gJhztwFT5kHaWoBaFvwUJmZCkTZANJjgMoxNG1F79sjdSABiy7NhD5ShZD",
  "key13": "45rBgJxbj3uV4SzyAszwgnZbaGXcEcTCzqmWCkWkMzDVYixB3z4t8K5j32RgVLxTs7mVRFMYTZ1p49f3buDNoFVj",
  "key14": "4n4YTMgdPFy9FLwJFVDt6yHjqKDGsJRtbpC7ZaR8SvfwKCtBaxryWQJkAHJRkr4miJHJNTP3fDDGUAKESyFtzVNs",
  "key15": "5C5bgrzBgSM9jP2dbLg5ruRc3o8ZfFFipHmKhgTHS94PZgz9FHRXGk7AYze25BEHURWZwTW5r8kggoLyLQcxQwjY",
  "key16": "4mdBt2gCSpj5Db6YUKiB7NwUCa1GVxSU3W4uWFftFK3FrWsiYh6iAnwc3Un5VWuU2eBKP3JmxAiyXQab47ZDaa6N",
  "key17": "2yoJvsVP3dDkM1VR3xwGS4AcB8dxh9XPvk5wE1EBCrbYMUUiSr6CzV71nC4aRRfnDFocrrvqBPrkdD1TgZsA1dgJ",
  "key18": "MpCQfTHqusHmErL6ASbfSsfb6o6M8ppfYcTfvsxU8gd7CdR4saW1YmiZMsMDDLAK6mHFcz4nhvicmFp2d1wGA9e",
  "key19": "2bkuqWX2V2Hb7BiiCjKzCA7Vo2QzDRQtif48yg5Rbpp7uMQBXqvSsv7aoEP6v2u7BNzbYX5gGwxHPNk4ifmXAZTU",
  "key20": "3NG91jF2BqTzcg4YKftcSAJCHmoxHcU5u1nnUUvhpY7xZC1TgJWhSMyGmdcfbWgxa4DrmYfC1s2UebsdrTu2LQJV",
  "key21": "66Y2HemrP6NeChVyMeed7MndzLdKuinnuZbnoauqLvgbQPKRnZYRtWHnoUyZ5kU4AWkptDcLv2436BktMziBeYbr",
  "key22": "4xU943LBZVVSPUDn889MptzUWjCd7Q1rL1AtC4mRTozZstyUvMyZdcbyFna3RotfTUDMumcmTL6smGk1TecmfAXN",
  "key23": "5E1TkYNNTZZ8f5PEWnC5uwoz6gNgqqYgJWHYE5VqQ2w3K6gVEdbEea45dtnxiBWbjEgd5WTrLSW4Cz5C2h5iUcRB",
  "key24": "5px98HdmDcfJPQYUwiqd8YTggNLhQMVRVxSSDRm4o85oUW3LK12fZhS4NTnsdE7phHm8NsoVn3ELmNX8bPzopk9e",
  "key25": "2bUZxZtKuNFR8NSocwrQ4v15KicJtWt3S4HoymgkAts6LZSrNRcrM8aGdEx6WBzoN4Ujt6mRPGiL8HNKqhJaP8K2",
  "key26": "4LwZWpneNXyhZvR5W13TeyxAAVr7qQxADCMS628FXQoi7F4apbrQop21jGNQxwgfiFuKsrXQxDN8skFbNHPAkksp",
  "key27": "2FLcCgben9k14gUnmUDnJ1c3J6R7sZyr6RMeBQEkSmxL3zkgBd2ofbsRG6eerouKtF2DrdyonkWJ6oT2md4BmUnV",
  "key28": "4GR8tfkgLS6wArzLoqEpHZEFcHw7o1kghQScqrZ6tcmQWcdE1Mt6Esm7vniv5cHWcXGPzVpeENCPkeUTMiLApZvi",
  "key29": "4PCbrcnp7u83rcWBfSvEQ4neKqnTmyoRZYN6DW2rTundUoaCj5uhNHhaVwX4Lv5f4BZyRLRjn2FMzg18P2woqspB",
  "key30": "52wUjashLmhByC2YM6CJGYRJUpE4bnAmiKmumyjpwiVJvBJgPVPzqN8DyztsGtm4wPkbuaYMNxe42rdoCt4jjDHM",
  "key31": "ka62wSqsoqvdwsAuM2AYS4jK16iFGgz5fBnUkkRd2HJUEDn5Eo9tYw6oUXSp8171hRQiFFH6QwNn4fx4tprsqgE",
  "key32": "4RwwpvAHjQLL9aZ4gCwQUXX3nGMNQRYPsh9hAENS2nZWDibwBaGc6UQFmEZzceXeYD2wPRFd8sWjQLd8d1waiJHM",
  "key33": "2XbB7GiSRkKcMXjQm4BHqJJNudrMuxcpPK3SRc1xW3VK21FYA5sap8rnJgnteKs1oxx645L4SAN3VfAp5NJnxism",
  "key34": "XczuEXRxaZFhJAyWjJ4J1M3RPHG8KSJNCUKQH1mREq9UZnV8fzxvro93Qgv17zuzdy58NDmrJQEZrphQCRA3zGL",
  "key35": "pkKuy11CQCT7fbJ85rQD1E8RtUpWjVbThJdGWYqynin9Mx5ukusQdERxBAFyyoRKTwVhVf1seUe93rnySae7jyy"
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
