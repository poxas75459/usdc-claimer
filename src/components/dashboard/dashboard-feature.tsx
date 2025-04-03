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
    "LBDjznPFN5X2ybQTGrpNSpzuuZvfKjqqQA8HFWcoihPg3e1PpJni1HnzMdoT37SPr2UE8jhwnYoVApPQgSk7KWs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WQSLFzLhyoZ4r5fK2xzW2Kmm3ZQqhtWG2u82VPpJ9FvnfmtqAYYCGWBTkoHQ279nuaPTXAW3BTsoQmswApBJzXN",
  "key1": "4iHi5ptuo3roqR3yCQreFf2V3g2vqcWqNWiusGU5wPijWwtc9VbC3oAzQHff5KBmaCqSZK6HrQKJwsyBSBA2T8aY",
  "key2": "cK8j2v8sQQwNGwbPdb4XCzqPQvy4H7naB9NsrR3W462CK5EneSBFCYT3sy2Wsrmwp1r2WLimNxL7rAYeTNph8mS",
  "key3": "4x3TLiLA7zwkYbjwPVaztb3oPCBnhboJvTWYgveVkmEA7L9Dprf9C2phQLgJ4i3155kswRvFkgQ99A3EECNyHfHK",
  "key4": "qL1oiyG1yybFeWHrWkM64sRFAU5FUQ11ybnSo9nxNT4sQBtur1NJ5B9tjQY7oDAgg4xDsYAnQt6hA9UWroc52HB",
  "key5": "5fcP282RuspAgFFhShGV6meBEDiv3fYKywaUTbBehf1Y3ZHLNGDHdp1WLZDqTcV6GkMtryA6HmYQMEL8n7i1vo5x",
  "key6": "3T2in1XK9qobVwGR32qqRsCfKoebmRVTqBsS5DUczYPDQvNgpe2tRyyGLW8jg6VhNHY3w1ZRDNRHHCicXSwfGKNJ",
  "key7": "24j6TR2rjedb8hNMNbHJ6h92mPMxiX91Q26jr8cbAdywAHKhEoCZEZewQTSvAWUn1qZocy8cz6i9eXfhm1RPj2tF",
  "key8": "5QDaC77nRia9WWkaY2iKui2KphMY1Et5WLUc2DtZh9dWs4YqjxrH3G7R8svRB9j7MspB9Ak3Bk7vaGVAKUu7wn44",
  "key9": "4pKqLjq3rfWQ4tjyhPVPtS8n2iETsMxH43WHB4JB3vJjJcWFU8kCrX8HFQUEQffhQLVT4NtoMkSDyVnwtSjuy7HB",
  "key10": "2x2MijmqXb2SkSziFpwwxHyMiaVjJsNUkSgie3RfyYh3KpfPXsJv6zNG4jSEbCPmjtcV3Z26RYhxbcfVe6s4guGD",
  "key11": "5GttaJ85DqLJNfbaUBKzPrqmMeiNAu8Ucy55NaPHWg1AEawwUAZsNtEC9YzmosZ8gNcCLWuoMcpxYkkZJaxf9Yp3",
  "key12": "3BdxebesRC144JLtxLT7BZLvxtuckQopBa6ynMUFPz4EbA9tAkNnwj6TyKwM6C9VSxbzPxQ47rweySKpB3YgxHen",
  "key13": "4kYqd7ef4iz4M7zVYjmsUZweGdv3LoTLqJhapLUnA4sYPfhnXu2PsfkA835JM6iamqteiJJKVksftfxQ6hbfh5uz",
  "key14": "3ZHeYAkUNuhTCqQgiNZnwjVLSBLbckRuodXF8Zo178aj7zL7nyaqrnJGXvFW4zFd3Z4w2jfPcuy8jSeuU1AZrfk8",
  "key15": "4qZbchPAoQftJQ7RaCFEzFwhfZLQPi7CPwaMdp7Ba4hBgA3nzYEymo6mKoPJ9QsviSUbNA1mdJZs2CVS9QiDb9i2",
  "key16": "2sr1WPDhqnhakuGJsQVfp6o2gjVZo8EuZHC76p8MGsdTfwK1fUxJuJLv4VNowFDkweHpPevNLYvtQURE1kXudtkQ",
  "key17": "45KUeVAuY5FLLRsKLS5uGUDwKH6uEF2QrLFzNdYRc98TvtsTBeFrPhAEv5KrUQvLUNB9kgQxZXRUhU4n9mm16izW",
  "key18": "3N8vF61Gu9ZcHEVkVX86y9p64bXPF5HD9zbRuuRXk9conEAJ38c4XJSiXUmEsmuts5RG3CsAzTuMm1D4bSjsQCzZ",
  "key19": "4bYEZAFBe4Jwdh8dtRFtXZysdEYFjwD7BumnVX2n4x2zo52TkTwoTaDUnZRcJasXXqjHaVGYEbapU8ubUBXQi19f",
  "key20": "566C7BkmvRAW35fzrymvaJYdpweNGQzRT7PVTVCoCDazvawtXKbhER3vNo64MFBwfH1qAbiSWwLXKTsn6v4dg7gQ",
  "key21": "3keHBd2kxczTpBT8oSQPfcKwaDVcfdra81Sm2tuTFXedU5Z2mperHTNRF6SXi5bSKySE5huUnw3YYEu4NxH1LuKq",
  "key22": "XazWScvCDt8GffcGoREoj1cESDvrzG5v86JVrqbB35i74CQA45eRbAZdLzwEqCW6NrqN5ZY2qQJwWevQWxh99gY",
  "key23": "3QjjYb2LvLdfcMKkC3snXFDw88fWLdRYng4tUMU8gNCxdZ1D7NPA1RA44sxKryoeoK3HZkZPhjaMgAvQHpK6f8fw",
  "key24": "22Nw3QoyCQgJH2sRtuiPuYryFA81x5xKvJ63Am4m3R1NctJWB1rN3nK6w8AGsSGQrhVnNaL1Pn6d25Uzh2qV5Gss"
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
