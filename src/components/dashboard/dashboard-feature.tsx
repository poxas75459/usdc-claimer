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
    "mpxFmA6bypZsUrazUKzjNpGcFo4111UQUAgGLycV9DTexCL7Xchz4pMxSGMo8tmNhoNPEsMh92ZtCcpte6GgnUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oMo6YKFtxY3FQ7fSHj2D36p136CYZj7aGbbJ6be13TykRY6JMFvDR2vVJQ6P9g2YdnZ3Jdrfv7NgAdoLozSNfpn",
  "key1": "2exzTo61CVq6MtsZAt3RDjWYmkZDeRxwGFZ1u3CYSiD2dUXwrJ8xDkPV7UofMzBMnLQsWsBVHvfVJKADirimX76K",
  "key2": "2gtTk46a4NFX718DR5bpCQWGaGJTXEnPKNoSdqGr2gA7eWq7yUJ9u74X3c3VBfsSfLxasNEghVCkmEDGFyipXanu",
  "key3": "3kNDEvhZtfCcDHsKPELsgcvo3iadDxSWBk2b5drhqS8G5ZC4Jc6X579KXQLqornRUut62AGSnsDDgo9YwXg9WrwT",
  "key4": "4jhoUv4hX8rvPS8zLWjzsCAa7rC8GNvrNLmWmDBXdfuvT7FXo6pLhszj1SJu5Di8Ut6BvVyVuuE2vtfmwZBedHjS",
  "key5": "4E8VCB16o7HbMNmBZbedJSPJQtRbXq3cx9UpCwAafVE32xj7exDPcYTCYYKC2pa7nMzYEPay3hDLmksVW1tniLKN",
  "key6": "3pXZfSTpNP2nyNFC7fZ6T2MDw7wVaR9DiqfXyTG9f8kSFjQBtadqqGdAE7niupay9fHNwcsfoQg1u3WXpQ3bUzRF",
  "key7": "BBH6SzT3pn5PvGWfc8RzGDADrizygdmNdY2GYTuvdV5z3wr2cZhvTYU93CcyYBJD8nik4zTtZ6GiNXksmSnQ4YG",
  "key8": "4dwxbhF9UJJo3UEFu1u6KgZMSuMHihGYEEyZgYFEVM1bsZfqKBEqfQvZ6FWvC8UDZYhmmbEn67ZQnEoaFX6LtHy1",
  "key9": "5dDZ7XKejXhskDiU7zqDHeGyy5NkG6JfQPBHs6jaatWT5FVkbSAmJACzA4LQzXTPFmdTEUrrNg4ykFbmUhRicNkd",
  "key10": "5HQXuQa9WCNokrk6fMmw6H5yTaF4D6N27Juc44CEcnf2wGfKEAsnhySq7RwYkGrXAVcJ89AeTizKMxfWK3VAQaz",
  "key11": "LaH6nUxVB8HkptN21g5Gs9yaopM1PKSVzU8goGm9MMkzqsB48TBN7tQ8Hc1WwfXufiQyvK6X4wC3YBDkj5y264z",
  "key12": "2Ct1EzdGX4jRxEUwD6QKvgv4RC8xGNikACjMYKj1N7X853VueoJm1SJpSeFJTXk5DyC4hbNg4Ej7RCqX2fZrgu7K",
  "key13": "49Hn1ViESL3cZaJzomXsxNvqpv8yqJKUf9vFFQC6QsZmDuWZwH7bxBqVUu3eNLZmJrM26AwZpsH2BwnbysD3bESa",
  "key14": "5oEKjb8jduLE1edLN2mf6CXM8uLoGmAac3Zdcm7G8bim58ZPUQy9rSmLyQ1wQEWegfXw8BX8xcTm67kwcHRaWBv7",
  "key15": "2qKPDy98KDreaQUYfnmkE9MvXGXwrmurm7pqQGMZHTBSwZEBzRmEzs2xzMU1ss3dTBk6KxtuZMiQfbdSTNyA9Bgs",
  "key16": "T6ELEdb46M7YJERKdp2dd2GPMHp6wUMbBRTWdtM4Nsztu4nqu4zcjWBcA9hbX68gaD1n2Gg5s54cEHWZaCfvJZL",
  "key17": "2MCzdLchzDK5z6mM96EqvTAenGwDtwJRreXxemuLdGCu64Z2Cdja7pBeRcJ8Q2HCcXNvNpahqLLzMhLTytMXinPi",
  "key18": "4As4uFBRq9mB6rGJyx9ijfTRNARVZPNCeSMvrsDWw55nJVXTegRzfD9NBegPLToQYVYvRhsgKRUrGmMgT6vrQSxs",
  "key19": "3kswUZLWYuhbNL8qARQ2aW78cmHWFqBnJkVCqnCfkxhBNvvbLotdVqFDaM2hDwMXmA11Fg5o3vdkixMssJUTBjpZ",
  "key20": "4yNhDd3ymzDT1Wz3Dge6wXYmvsdohikZ2gxEvF12tocW7xVJrcgoHWudvUjLdEf3UVvJ8V7MRox11ugP6oHZuaa6",
  "key21": "4LV3HY5Sw6kFpFvABxBot2cRDVBpQMarmFtqqnTWesRMMUGqejZUfwnwHwbSvHEad7vvjn6mAyR4SCU1xniC58yL",
  "key22": "4eRCsQNc3HzZYS2YG3sL1bFa4qUeuJz1xmkycDc4wymbtMCxrDk51kmJf9tXXtyahM7Y8vqHt1stktG7iSPVe3M1",
  "key23": "64BST2Na5NkiXr1FxsXC7oaqYfDbPB56NTi9sQkZ9PKNy7PQF8DCeqLYrEKA9X3JKr7tTPpxTpAgmwrMayEmiGbq",
  "key24": "EyuwgYcrut9TVm6H8NTa54HmU5rAP9raMgEa1u4oaLVvfzvTJQCssKE19nxb4dCxhPkpaHWbcc2NghFoKvrenGb",
  "key25": "3gz4eGkkZnhYDQXApMxmiAfmsBPYuHbQgtpQASbtBp4rhohdiUHbuwrNTcUDEFZDfpwy6vRQPyopoCmayw288P1q",
  "key26": "5DJxtxRcdbjhyuHf43WyXE7eLVqeEo5uYF7KAVBkjtMnojczNPRGXPyTjoiJYwcfyFyxmTWX2MtgQJWNDGkvjQpB",
  "key27": "2VjGMmQM6ANKPqcViQk8Hn6jMfQZAyVMn1EGkwakGigpKu7SSFntf6wAn5T2sRKu8TBKyGQqxeiNK4KYLSdNRFbc",
  "key28": "2PP6tWZJ28nk6zNvv5zuYH9x9BgiAxLga84HE3CBDWdEv5uzmqxRbE8coTWcciv1taGSH5QoDQEHEpEJ3PhasREz",
  "key29": "2Zqd14vak65AzvbSjHsohje5QecePyqays7FUUSmwbHN8buRBpXR2fNdUnP1rFCGjfirxZ8E4gbFkEMw5zFvJKUj",
  "key30": "2uW1ypCyWqdyAFz4mSbPZThYKGZBFig1nuAHEVBZwvE5v9cEdZntLVHBH3DwNV4E4TcbRueNAD8d9cVpEWzdKd6b",
  "key31": "4XAB2JHTzq2narBWmABKvV3pPeQVwnU7BoU5W92hG78MM2hT836fbMhrGbJV1mZa5pYBcxZicYF2jCX3DXa73kjp",
  "key32": "CJhD662UcySiMp5qvwy5aJifeCypYuLypq7w4RZC4zRVg1EXePW4q5Zhbt3KrCq4nUEBNaec4XohohLnzeekKie",
  "key33": "4sgLiMcje5LzMuhmRvgfus2EAJ78wB2MXvv8Zs4Z6ohqKY1f9VixENkmPEMxjKGpj8LxvnaVY6R4NZZN3qsJ94rG",
  "key34": "2z7D7WnDe2rSAdhgMpgYZ2z1Rnz2yyuebCP8Ahe1tA253hAxGLDCT6Dz2NzdtYtKbzceb9JztHyBPNQD5njdtMWC",
  "key35": "K9uwhCVf1g4oERXNqS1wcnhhZ6WGEim3vmXJp6yGfs3kgGceT1kS3qe8fd2eg6MbW8z7JhikuQrVQwKvnaxorvT",
  "key36": "66LcARWZuK8mLn4YsTJY5qmpVnGFF4LFk2vpnj4dbJj7nm4Dvdir9CqN79bqpZS8A5axyD3KhRCdA37eU8H2etMH",
  "key37": "4JaoFMh6Y3rKsuUdGUaTSpD4mjWg61Tnk9dekemerQweQC7vcPSB4MxZYyuddsi1Zn1tR7ysCgRXrCYXgh4m4XXJ",
  "key38": "5FhvkMP1RPQyE6SDCc42rr4pFGAmbipd5G49sqKfiYrhfLGLZBE4obkJJdqk1tDEGQwUWLNGedRZUoze5bFymnYR",
  "key39": "2spBztFJvz7TknNGcC5x3yZoyzcrA7ktWEUDSDVPT2rtArdaN2ZQuPuCtYr5EmQByUmsphkbwanRiJrVasLvn94f"
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
