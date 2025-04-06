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
    "4iV9fj2eoKRr47BZyAwqarLRXpoimV9RBkNKFDvaKLH251eAEEAZQPT9m27dHuT6vn5QR1XfRgZ5wSzWShRKk95d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GNEwKgzMPLsbU61b3XD6edieoUoSwWWKPLDBDX98f6QNjzDtxi7XaKiG1wG9rCofut91YuMtS5UMZq3STfsNzmH",
  "key1": "4qmAtGUbeNftayuLSEGQCGEhu2SzoX1j5FKEF1huhGa6tQTnV5eF3yEUq4i814VaCSEeVSVSCESkeohASAEFkV8r",
  "key2": "54MsTCEkTTfev1cFu1RNE131kfiLizRswyfcSroNyzT9Hi4wVGXkyYVf6jgH1fKgHoaKyjGsenX6n3ZsSS8wPke4",
  "key3": "53WwsXnwRyYofW47gqqTmby57qrTRZKuor6kmSARumQsJTuA1V1NRG7XECXFthA81yPCXsv47VKZCNP9mVAnWM6R",
  "key4": "4JuJuJ8U2xQHNt7qo9VSTtSEswSknwffWkz8Jf8YT7WBHohEpfwuMHSkULZdZVfPsEaEphmGZAcPf81u3qpMMRfR",
  "key5": "47cuS3RN6nYJmZEWtJQX3YZbaCZ1rdpRtaevrjPc371D2aiSNso1W2cCWZGH6Rdbft2h8Vczxw49BW6weE2rwSce",
  "key6": "41oaLvY9D3A9MQKjrWmqod3GGx8WQmVC5UYyqRpKzNqZppQS6XvuA8dEXp79LHcEacDr4SdpQjnkcH4x1QLvoUFM",
  "key7": "4tGDNr7Cfocawmscorgg8jyK7A8pdJEE2oDDNcCoNkdFZoMNKVpwdZL1HtJUzTdtjYHFLFtktNJ43epoq7GuYoP6",
  "key8": "5Vp2yKwHMYUc5xrQNopkNYsHuQreA1kHqJpcWRNAVyjjaDDuVJpQioE6fCF4yYRYDWdEFnKQq6ah7tTvBxDknyWq",
  "key9": "4cmq4rvcjdgiGyKaNy6yZzBx3Gb9pKHA74yUqXzGvEcnewC8RpgF2g6HbyGg5qQWZBMFFZswTyP44smyhkAgPgqb",
  "key10": "2D6K7PJgJLVzhKdcsvU465hS4g4opfFENFKkECVGNzVuuFwfLJq13ebga6TGrNKHc3as2SoJjf9xxAm3kocQwmgv",
  "key11": "5KfBW1rWAs2euVqvdpvNBnHmz6QGZM3VRShb2yYkwkvYXZHaA6eGFhv5z2uaLQURn4x76tj2nDdUz1nFZ74msnF6",
  "key12": "5LxUYF1gpxvYVHt82fxtR14L6cWea5eGdnb6hwM3CsX254QwvfKavApYwtwrQZ1iH6eBsXUvKdr2NuTF9JrY8Xev",
  "key13": "4XLZS67JR5mg2nvYNbWDHtiD6TZTW7hKEy6gdWoKr9a6wKxupd8cwaicDmaPdxWAiUzghsJ1yFxQ4yiPr8CrWMNU",
  "key14": "67M7PWasVnRn9MWpThUM9RH7y5XKEa1CBrb8fquwW1P5WFbEPiq3hNAev8FAVmE4Sru3KCh8P8Xjw4WzhAnis9Ro",
  "key15": "3oqziP8VzuDoXspw9rxZ41vYKzSgvtuco9EyzVX35bJnnwaVYWB2sEGaiuzp41fa15yFav3j4uSYfbz9RwGbWbiq",
  "key16": "3xtmzMxivJQb5msqv2EZSBitaPm9ijEJqAiZSR9kWY52MnAVP8BcYZAFoy85xzs5w9EJfMFQSyKwVmwdLSY7B59F",
  "key17": "DejgtAqGEdv71v3tYnK4WD9MJiti12TQyxxBTyz7ko7nZ8fz75q2BViEaE7oVxiTHECkUMK4Wx8qGCZ3rfAKwQV",
  "key18": "35tCizPKpSyR7xp2btUZydpHvBVobSP4CDDxpMfEYR8qEuj91UbJFCr67TEMUkU8CkLhdkQX3QgUsVLHUKe8rMXv",
  "key19": "27C9c4nDDPBRKczoR7gPN7dChwKnM6HzwVhf4NS6eEMB8NTbxCbZYf3RTzmEJyV2jJhdus91zeYNM3hgXgdSHXUx",
  "key20": "2oocD5LFEQTRYGF6gVXAvh2EfzcmKt6xJ8d69guUSWu4P1ErNb5wikW5qSUDj92QTyUwPfpBQiaPCu8aDRcmxn8D",
  "key21": "5E5Y4sasThC4tqCqrfvNKBM9BD2WzHwu8vHytjBq2k3dLGvLyH6EkME7HZbJ8To9V6WFq2vFdJkcTPX3Mv8SPsVy",
  "key22": "4c4m1vcHHy3fsN1NEJARhMQsAShM2hdhA7psvLzqNcrTHKMsN1eD6XU7WDhnWNBx46gdno8FgJhz5fPNmcej4WSF",
  "key23": "5c46wjG16sWoDob76S2iRRohU37ss1TuDykW5PAADDrtDQMcvyLwEYHPWtrzMYKPPPFdEFgxUUmo4f3aZY6w61oL",
  "key24": "5S8oG232oNEtcEGLdkVPowzhc3Qow4k7iFNUC3mYXBAjnYCgJd3Ym6E15RQzJgov1XPDD6BJGa2KTTK6VkjjpymH",
  "key25": "22TQbhfssjRA4WVRGY1hmgf2P912fQPEsjN42r1jn2C3WKjHtqVSp5nj9rnjh1Qdmn7sxqGeMgcryBnj3tsspV25",
  "key26": "59GVQQTqC5Ap1qfopXhugoHxq4yy496tWU5AeAkK8VWG8GV5UqXXYCPfiQ9Y7ki7mVbk2RVGCkZMRhx15hEVjqbS",
  "key27": "5ZXt32FhbRTJcvTkZrWabxbjcUmhfsvHzdE5LnzzTeJRbBCze3xpZfLPy6K2mBbMBEvkopu5Wcei1oY4KxCa8Yiy",
  "key28": "3FDgsNKVTNWK7qYAnntN8c7Z4hAkbHBoSvKGo4t13qmxqKKVhusFghxtZbqy7FsZqR9Hewb8XRrMm6DmQV5yez3d",
  "key29": "t5qpG6e6o71VRfY4CFnzQBj2ivV5juV45uVkEGukVK35Xrpr1CUugAMoi7HuopQe5a9iS1EpgmGX1Da1v6QKokb",
  "key30": "3xWGambntv2RGbRV1DMrGQANZSqC9pboWcAgt6XZoy3WCSpDMsQFTWTEKK2LdhQ6rcaDyFUxsmNSowLWnn2rR6DM",
  "key31": "4HQLeu4JZGfkQYDaC7s6uQhRVfbBC68At414WhQh48pGZDD85qrnJhw6jVXry4ChS1kkaLDNZvUFPiyZtSLirk9R",
  "key32": "5Zg4UYF6rU8HkqtYpZCPNRcJHroeuM8yFpU6emRy1b3aHA9EGMCxYfcVrbxERrnt8HettNcp4jqoXvVDNzeF8BsX",
  "key33": "2m7cZMYWa39AkDVqkJ1XBMaq7LGFY677v23G1Dc7vzsQgawgFJZtTg3JM4wRByLxfWBTvCGCTtWKpwDkAVsAbrVi",
  "key34": "29WwfRWvNtfHhpaWjy8S7aLyS5WScP1sF3r28hJvDpBvKoR2dnmuRyf8SWkJdfCJYS3wacG7p3ybVGUgpphhAY5f",
  "key35": "5NNo8qysXg4pDauN61X3Jz8372ZnLSMTrXLagkmukN4gg3ZZMAVQwSQVn5x41WXsKeCnbevki6VgPN74hvQLNmQS",
  "key36": "T5ngcKQvJzTReGrBXjyk3mpGNjXUeTa5GVJSba4Lx6v8PCxhmxDRdNTn78CEXDcunAZ578hKeXdYtMvgQrrdYhS",
  "key37": "2wEwLLkNcBdP8ZVwiowhykLsekrRjdPG4HEnPQy3HrpNeqdQ8snGDMHkwG7MRBttEn1jDuifBzeFaRkDTUYTd6ZZ",
  "key38": "3SE9iaJxA1tURuPhFtpBFTQ6kVddHWwgGKN4kNMY7PBpGvgxg1fNvNBg3kaddP7v71KFvEhVg2G4vGeXeDTH1Zhc"
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
